<template>
    <div id="chart-repo-dunut" class="inline px-8 content-center">
        <DoughnutChart v-bind="doughnutChartProps" :styles="myStyles()" />
    </div>
</template>

<script lang='ts'>
import { defineComponent, computed, ref, PropType } from "vue";
import { DoughnutChart, useDoughnutChart } from "vue-chart-3";
import { Chart, ChartData, ChartOptions, registerables } from "chart.js";

Chart.register(...registerables);

export default defineComponent({
    components: { DoughnutChart },

    props: {
        repos: {
            type: Object as () => PropType<any>,
            required: true
        }
    },

    setup({ repos }) {
        const dataValues = ref([30, 40, 60, 70, 5]);
        const toggleLegend = ref(true);

        const testData = computed<ChartData<"doughnut">>(() => ({
            labels: ["Java", "Node", "Python", "Go", "Elixir"],
            datasets: [
                {
                    data: dataValues.value,
                    backgroundColor: [
                        "#77CEFF",
                        "#0079AF",
                        "#123E6B",
                        "#97B0C4",
                        "#A5C8ED",
                    ],
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
                    text: "Repo Stats",
                },
            }
        }));

        const { doughnutChartProps, doughnutChartRef } = useDoughnutChart({
            chartData: testData,
            options,
        });

        function myStyles() {
            return {
                position: 'relative',
                'padding-left': '20%',
                'padding-right': '20%',
            }
        }

        function asd(repos:any): string {
            

            return ''
        }

        return {
            testData,
            options,
            doughnutChartRef,
            doughnutChartProps,
            myStyles
        };
    },
});
</script>

<style>
#chart-repo-dunut > div > button {
    padding-left: 5px;
    padding-right: 5px;
}
</style>
