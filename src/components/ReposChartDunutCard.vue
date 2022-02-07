<template>
    <div v-if="checkRepos(repos)" id="chart-repo-dunut" class="inline px-8 content-center">
        <DoughnutChart ref="doughnutRef" v-bind="doughnutChartProps" :styles="myStyles()" />
        <!-- <DoughnutChart
            ref="doughnutRef"
            :chartData="testData"
            :options="options"
        :styles="myStyles()"
        />-->
    </div>
</template>

<script lang='ts'>
import { defineComponent, computed, ref, PropType } from "vue";
import { DoughnutChart, useDoughnutChart } from "vue-chart-3";
import { Chart, ChartData, ChartOptions, registerables } from "chart.js";
import { reduceCountLanguage, getKeys, getValues } from '@/util/functions';
import { Repo } from "@/model/Repo";
import { color } from 'chroma.ts';

Chart.register(...registerables);

export default defineComponent({
    components: { DoughnutChart },

    props: {
        repos: {
            type: Object as PropType<Repo[]>,
            required: true
        }
    },

    methods: {
        checkRepos(repos: Repo[]): boolean {
            if (repos) return repos.length > 0
            return false;
        }
    },

    setup({ repos }) {
        const reduceLanguages = reduceCountLanguage(repos);
        const values = ref(getValues(reduceLanguages));
        const keys = ref(getKeys(reduceLanguages));
        const toggleLegend = ref(true);

        console.log('values:', values.value);
        console.log('keys:', keys.value);

        const itemIndex = keys.value.findIndex((item) => item === 'null');
        keys.value[itemIndex] = 'Empty Repo'


        let colorData = color('teal');
        let arrayColors: string[] = [];

        for (let i = 1; i <= keys.value.length; i++) {
            arrayColors.push(colorData.saturate(i * 2.5).hex());
        }

        console.log('colors-arr', arrayColors);

        const testData = computed<ChartData<"doughnut">>(() => ({
            labels: keys.value,
            datasets: [
                {
                    data: values.value,
                    backgroundColor: arrayColors,
                },
            ],
        }));

        const options = computed<ChartOptions<"doughnut">>(() => ({
            scales: {
                myScale: {
                    type: "logarithmic",
                    position: toggleLegend.value ? "left" : "right",
                },
            },
            plugins: {
                legend: {
                    position: toggleLegend.value ? "top" : "bottom",
                },
                title: {
                    display: true,
                    text: "Repos Chart by Languages",
                },
            }
        }));

        const { doughnutChartProps, doughnutChartRef } = useDoughnutChart({
            chartData: testData,
            options,
        });


        const doughnutRef = ref();


        function myStyles() {
            return {
                'position': 'relative',
                'padding-left': '10%',
                'padding-right': '10%',
                'min-height': '400px'
            }
        }

        return {
            testData,
            options,
            doughnutChartRef,
            doughnutChartProps,
            myStyles,
            doughnutRef
        };
    },
});
</script>

<style scoped>
#chart-repo-dunut > div > button {
    padding-left: 5px;
    padding-right: 5px;
}
#chart-repo-dunut > div > canvas {
    height: max-content;
    min-height: max-content;
}
</style>
