<script setup>
import { ref } from 'vue';

const events = ref([
    {
        status: 'Data Collection',
        description: 'Collecting tweets from Twitter from January 2021 to October 2022.',
        icon: 'pi pi-twitter',
        color: 'rgba(156, 0, 0, 0.99)'
    },
    {
        status: 'Data Cleaning',
        description: 'Cleaning the collected data to remove noise and irrelevant information.',
        icon: 'pi pi-filter',
        color: 'rgba(156, 0, 0, 0.99)'
    },
    {
        status: 'Embedding with CT-BERT and SBERT',
        description: 'Using CT-BERT and SBERT for embedding. CT-BERT is optimized for COVID-19 tweets, while SBERT provides sentence-level embeddings.',
        icon: 'pi pi-sliders-h',
        color: 'rgba(156, 0, 0, 0.99)'
    },
    {
        status: 'Dimensional Reduction',
        description: 'Applying PCA and using the elbow method to decide the number of dimensions.',
        icon: 'pi pi-chart-line',
        color: 'rgba(156, 0, 0, 0.99)'
    },
    {
        status: 'Testing Classifiers',
        description: 'Testing different classifiers including XGBoost, Naive Bayes, Random Forest, and Voting Ensemble.',
        icon: 'pi pi-check-square',
        color: 'rgba(156, 0, 0, 0.99)'
    },
    {
        status: 'Training the Model',
        description: 'Training the selected model with the prepared data.',
        icon: 'pi pi-file',
        color: 'rgba(156, 0, 0, 0.99)'
    },
    {
        status: 'Making Classifications',
        description: 'Using the trained model to classify new data.',
        icon: 'pi pi-tags',
        color: 'rgba(156, 0, 0, 0.99)'
    },
    {
        status: 'Results Analysis',
        description: 'Analyzing the results to evaluate the performance of the model.',
        icon: 'pi pi-chart-bar',
        color: 'rgba(156, 0, 0, 0.99)'
    }
]);
</script>

<template>
    <div class="grid grid-cols-12 gap-8"></div>
    <div class="col-span-full">
        <div class="bg-transparent card">
            <header v-motion-fade class="flex flex-col-reverse items-center justify-around gap-14 md:flex-row process__header">
                <div class="flex flex-col gap-5 mr-auto md:w-1/2 process__header__content">
                    <h1 class="text-4xl process__header__content--title sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl">Unraveling the COVID-19 Vaccine Conversation:</h1>
                    <p class="process__header__content--paragraph sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                        Dive into this captivating timeline showcasing the intricate process of classifying tweets about COVID-19 vaccines. From harvesting Twitter data to leveraging advanced language models, this project offers a unique window into
                        the evolving vaccine narrative. Prepare to be amazed as we navigate the breakthroughs and challenges of this innovative endeavor!
                    </p>
                </div>
                <img src="/covidLogoProcess.png" alt="covidIMG" class="justify-center w-[300px] md:w-[400px] lg:w-[700px]" />
            </header>

            <Timeline :value="events" align="alternate" class="mt-32 customized-timeline">
                <template #marker="slotProps">
                    <span class="z-10 flex items-center justify-center w-8 h-8 text-black rounded-full shadow-sm" :style="{ backgroundColor: slotProps.item.color }">
                        <i :class="slotProps.item.icon"></i>
                    </span>
                </template>
                <template #content="slotProps">
                    <Card v-motion-slide-visible-once-left class="mt-4">
                        <template #title>
                            {{ slotProps.item.status }}
                        </template>
                        <template #content>
                            <p>{{ slotProps.item.description }}</p>
                        </template>
                    </Card>
                </template>
            </Timeline>
        </div>
    </div>
    <div class="col-span-full"></div>
</template>

<style lang="scss" scoped>
.process__header__content {
    &--title {
        background: #ff0000;
        background: linear-gradient(to right, #ff0000 0%, #710b0a 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-family: 'Shrikhand', serif;
        position: relative;
    }
    &--paragraph {
    }
    color: #ccc;
}

@media screen and (max-width: 960px) {
    ::v-deep(.customized-timeline) {
        .p-timeline-event:nth-child(even) {
            flex-direction: row !important;

            .p-timeline-event-content {
                text-align: left !important;
            }
        }

        .p-timeline-event-opposite {
            flex: 0;
        }

        .p-card {
            margin-top: 1rem;
        }
    }
}
</style>
