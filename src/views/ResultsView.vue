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
        labels: ['Retweets', 'Likes', 'Replies', 'Has URL', 'Has Media'], // Updated labels to match the metrics
        datasets: [
            {
                label: 'Misinformation Metrics',
                backgroundColor: primaryRed,
                borderColor: primaryRed,
                data: [0.1946, 0.8507, 0.1013, 0.4129, 0.0891] // Normalized values for Misinformation
            },
            {
                label: 'Counter-Misinformation Metrics',
                backgroundColor: secondaryRed,
                borderColor: secondaryRed,
                data: [0.1985, 0.8323, 0.0961, 0.4405, 0.0957] // Normalized values for Counter-Misinformation
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
        labels: [
            'Jan 2020',
            'Feb 2020',
            'Mar 2020',
            'Apr 2020',
            'May 2020',
            'Jun 2020',
            'Jul 2020',
            'Aug 2020',
            'Sep 2020',
            'Oct 2020',
            'Nov 2020',
            'Dec 2020',
            'Jan 2021',
            'Feb 2021',
            'Mar 2021',
            'Apr 2021',
            'May 2021',
            'Jun 2021',
            'Jul 2021',
            'Aug 2021',
            'Sep 2021',
            'Oct 2021',
            'Nov 2021',
            'Dec 2021',
            'Jan 2022',
            'Feb 2022',
            'Mar 2022',
            'Apr 2022',
            'May 2022',
            'Jun 2022',
            'Jul 2022',
            'Aug 2022',
            'Sep 2022',
            'Oct 2022'
        ],
        datasets: [
            {
                label: 'Counter-Misinformation',
                data: [65, 211, 940, 1388, 1136, 595, 934, 890, 982, 928, 1814, 3551, 3034, 2089, 2771, 3378, 3247, 3572, 5021, 6176, 5299, 3989, 3710, 5281, 4937, 2665, 1768, 1881, 1501, 1470, 1849, 1649, 1453, 510],
                fill: false,
                backgroundColor: primaryRed,
                borderColor: primaryRed,
                tension: 0.4
            },
            {
                label: 'Misinformation',
                data: [99, 383, 1698, 2123, 1846, 1046, 1736, 1824, 1794, 1782, 2978, 5915, 5289, 4087, 5117, 6664, 6315, 6103, 12825, 17904, 15825, 12319, 11984, 18126, 19326, 9341, 5948, 6186, 5477, 5746, 7667, 5965, 4526, 1549],
                fill: false,
                backgroundColor: secondaryRed,
                borderColor: secondaryRed,
                tension: 0.4
            },
            {
                label: 'Neutral',
                data: [67, 409, 3199, 5183, 4322, 1967, 2641, 2563, 2119, 2108, 3750, 8099, 10073, 6394, 7988, 8300, 8037, 7135, 8488, 11917, 9603, 6755, 6469, 9111, 7468, 3969, 2773, 2777, 3161, 2433, 2564, 2157, 2334, 795],
                fill: false,
                backgroundColor: 'rgba(192, 192, 192, 0.6)', // Neutral color
                borderColor: 'rgba(192, 192, 192, 0.8)', // Neutral color
                tension: 0.4
            }
        ]
    };

    polarData.value = {
        labels: ['Retweets', 'Likes', 'Replies', 'Has URL', 'Has Media'],
        datasets: [
            {
                label: 'Misinformation Metrics',
                data: [0.1946, 0.8507, 0.1013, 0.4129, 0.0891], // Normalized values
                backgroundColor: 'rgba(255, 0, 0, 0.2)', // primaryRed with 20% opacity
                borderColor: primaryRed,
                hoverBackgroundColor: 'rgba(255, 0, 0, 0.5)' // primaryRed with 50% opacity on hover
            },
            {
                label: 'Counter-Misinformation Metrics',
                data: [0.1985, 0.8323, 0.0961, 0.4405, 0.0957], // Normalized values
                backgroundColor: 'rgba(255, 102, 102, 0.2)', // secondaryRed with 20% opacity
                borderColor: secondaryRed,
                hoverBackgroundColor: 'rgba(255, 102, 102, 0.5)' // secondaryRed with 50% opacity on hover
            }
        ]
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
                },
                angleLines: {
                    color: textColorSecondary
                },
                suggestedMin: 0, // Start the scale at 0
                suggestedMax: 1, // Set the maximum to 1 or another appropriate value
                ticks: {
                    stepSize: 0.2, // Smaller steps to make the differences more noticeable
                    color: textColor,
                    backdropColor: 'rgba(0, 0, 0, 0)' // Transparent backdrop for better visibility
                }
            }
        }
    };

    radarData.value = {
        labels: ['Retweets', 'Likes', 'Replies', 'Has URL', 'Has Media'],
        datasets: [
            {
                label: 'Misinformation Metrics',
                borderColor: primaryRed,
                backgroundColor: 'rgba(255, 0, 0, 0.2)',
                pointBackgroundColor: primaryRed,
                pointBorderColor: primaryRed,
                pointHoverBackgroundColor: textColor,
                pointHoverBorderColor: primaryRed,
                data: [0.1946, 0.8507, 0.1013, 0.4129, 0.0891] // Normalized values
            },
            {
                label: 'Counter-Misinformation Metrics',
                borderColor: secondaryRed,
                backgroundColor: 'rgba(255, 102, 102, 0.2)',
                pointBackgroundColor: secondaryRed,
                pointBorderColor: secondaryRed,
                pointHoverBackgroundColor: textColor,
                pointHoverBorderColor: secondaryRed,
                data: [0.1985, 0.8323, 0.0961, 0.4405, 0.0957] // Normalized values
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
                },
                angleLines: {
                    color: textColorSecondary
                },
                suggestedMin: 0, // Start the scale at 0
                suggestedMax: 1, // Set the maximum to 1 or another appropriate value
                ticks: {
                    stepSize: 0.2, // Smaller steps to make the differences more noticeable
                    color: textColor
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
        <Fluid class="grid-cols-10 gap-8 w-full mx-auto md:w-[70%] mt-20">
            <div class="col-span-12xl:col-span-6">
                <div class="mt-10 chartContainer">
                    <div class="mb-4 text-xl font-semibold">Epidemiological Trends in COVID-19 Information: A Two-Year Analysis of Misinformation and Counter-Misinformation</div>
                    <Chart type="line" :data="lineData" :options="lineOptions"></Chart>
                </div>
            </div>

            <div class="col-span-12 xl:col-span-6">
                <div class="flex flex-col items-center mt-10 chartContainer">
                    <div class="mb-4 text-xl font-semibold">Distribution of Misinformation,Natural Content,and Counter-Misinformation</div>
                    <Chart type="doughnut" :data="pieData" :options="pieOptions"></Chart>
                </div>
            </div>

            <div class="col-span-12 xl:col-span-6">
                <div class="flex flex-col items-center mt-10 chartContainer">
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

    padding: 1rem;

    color: white;
}
.process__header__content--title {
    color: red;
}
.process__header__content--paragraph {
    color: #ccc;
}
</style>
