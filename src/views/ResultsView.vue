<script setup>
import { useLayout } from '@/layout/composables/layout';
import { onMounted, ref, watch } from 'vue';

const { getPrimary, getSurface, isDarkTheme } = useLayout();
const lineData = ref(null);
const pieData = ref(null);
const polarData = ref(null);
const barData = ref(null);
const radarData = ref(null);
const lineOptions = ref(null);
const pieOptions = ref(null);
const polarOptions = ref(null);
const barOptions = ref(null);
const radarOptions = ref(null);

onMounted(() => {
    setColorOptions();
});

function setColorOptions() {
    const primaryRed = '#FF0000'; // Define the primary red color
    const secondaryRed = '#FF6666'; // Define a secondary red color for hover or lighter elements
    const textColor = 'white'; // Text color remains white for contrast
    const textColorSecondary = 'rgba(255, 255, 255, 0.7)'; // Slightly lighter white for secondary text
    const surfaceBorder = 'rgba(255, 0, 0, 0.3)'; // Light red border color

    barData.value = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: primaryRed,
                borderColor: primaryRed,
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: 'My Second dataset',
                backgroundColor: secondaryRed,
                borderColor: secondaryRed,
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    };
    barOptions.value = {
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary,
                    font: {
                        weight: 500
                    }
                },
                grid: {
                    display: false,
                    drawBorder: false
                }
            },
            y: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                }
            }
        }
    };

    pieData.value = {
        labels: ['Misinformation', 'Natural', 'Counter-misinformation'],
        datasets: [
            {
                data: [217513, 167128, 80684],
                backgroundColor: [primaryRed, secondaryRed, surfaceBorder],
                hoverBackgroundColor: [primaryRed, secondaryRed, surfaceBorder]
            }
        ]
    };

    pieOptions.value = {
        plugins: {
            legend: {
                labels: {
                    usePointStyle: true,
                    color: textColor
                }
            }
        }
    };

    lineData.value = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'First Dataset',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                backgroundColor: primaryRed,
                borderColor: primaryRed,
                tension: 0.4
            },
            {
                label: 'Second Dataset',
                data: [28, 48, 40, 19, 86, 27, 90],
                fill: false,
                backgroundColor: secondaryRed,
                borderColor: secondaryRed,
                tension: 0.4
            }
        ]
    };

    lineOptions.value = {
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                }
            },
            y: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                }
            }
        }
    };

    polarData.value = {
        datasets: [
            {
                data: [11, 16, 7, 3],
                backgroundColor: [primaryRed, secondaryRed, surfaceBorder, textColorSecondary],
                label: 'My dataset'
            }
        ],
        labels: ['Red1', 'Red2', 'Red3', 'Red4']
    };

    polarOptions.value = {
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            r: {
                grid: {
                    color: surfaceBorder
                }
            }
        }
    };

    radarData.value = {
        labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
        datasets: [
            {
                label: 'My First dataset',
                borderColor: primaryRed,
                pointBackgroundColor: primaryRed,
                pointBorderColor: primaryRed,
                pointHoverBackgroundColor: textColor,
                pointHoverBorderColor: primaryRed,
                data: [65, 59, 90, 81, 56, 55, 40]
            },
            {
                label: 'My Second dataset',
                borderColor: secondaryRed,
                pointBackgroundColor: secondaryRed,
                pointBorderColor: secondaryRed,
                pointHoverBackgroundColor: textColor,
                pointHoverBorderColor: secondaryRed,
                data: [28, 48, 40, 19, 96, 27, 100]
            }
        ]
    };

    radarOptions.value = {
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            r: {
                grid: {
                    color: textColorSecondary
                }
            }
        }
    };
}

watch(
    [getPrimary, getSurface, isDarkTheme],
    () => {
        setColorOptions();
    },
    { immediate: true }
);
</script>

<template>
    <div class="p-8">
        <header v-motion-fade class="flex flex-col-reverse items-center justify-between gap-14 md:flex-row-reverse process__header">
            <div class="flex flex-col gap-5 mr-auto md:w-1/2 process__header__content">
                <h1 class="text-4xl process__header__content--title sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl">COVID-19 Data Insights</h1>
                <p class="process__header__content--paragraph sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                    Explore key data visualizations that highlight the impact of COVID-19. This page presents charts covering infection rates, vaccination progress, economic effects, and public response, offering a clear overview of the pandemic's
                    ongoing influence.
                </p>
            </div>
            <!-- <img src="/covidChart.png" alt="covidIMG" class="justify-center w-[300px] md:w-[400px] lg:w-[400px]" /> -->
        </header>
        <Fluid class="grid grid-cols-12 gap-8 mt-10">
            <div class="col-span-12 xl:col-span-6">
                <div class="chartContainer">
                    <div class="mb-4 text-xl font-semibold">Linear</div>
                    <Chart type="line" :data="lineData" :options="lineOptions"></Chart>
                </div>
            </div>
            <div class="col-span-12 xl:col-span-6">
                <div class="chartContainer">
                    <div class="mb-4 text-xl font-semibold">Bar</div>
                    <Chart type="bar" :data="barData" :options="barOptions"></Chart>
                </div>
            </div>
            <div class="col-span-12 xl:col-span-6">
                <div class="flex flex-col items-center chartContainer">
                    <div class="mb-4 text-xl font-semibold">Distribution of Misinformation,Natural Content,and Counter-Misinformation</div>
                    <Chart type="pie" :data="pieData" :options="pieOptions"></Chart>
                </div>
            </div>
            <div class="col-span-12 xl:col-span-6">
                <div class="flex flex-col items-center chartContainer">
                    <div class="mb-4 text-xl font-semibold">Distribution of Misinformation,Natural Content,and Counter-Misinformation</div>
                    <Chart type="doughnut" :data="pieData" :options="pieOptions"></Chart>
                </div>
            </div>
            <div class="col-span-12 xl:col-span-6">
                <div class="flex flex-col items-center chartContainer">
                    <div class="mb-4 text-xl font-semibold">Polar Area</div>
                    <Chart type="polarArea" :data="polarData" :options="polarOptions"></Chart>
                </div>
            </div>
            <div class="col-span-12 xl:col-span-6">
                <div class="flex flex-col items-center chartContainer">
                    <div class="mb-4 text-xl font-semibold">Radar</div>
                    <Chart type="radar" :data="radarData" :options="radarOptions"></Chart>
                </div>
            </div>
        </Fluid>
    </div>
</template>

<style scoped>
.chartContainer {
    /* Existing styles */
    /* From https://css.glass */
    background: rgba(152, 36, 36, 0.048);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 0, 0, 0.3);
    padding: 1rem;

    /* New style */
    color: white; /* Set text color to white */
}
.process__header__content {
    &--title {
        background: #ff0000;
        background: linear-gradient(to right, #ff0000 0%, #710b0a 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-family: 'IBM Plex Mono', monospace;
        position: relative;
    }
    &--paragraph {
        color: #ccc;
    }
}
</style>
