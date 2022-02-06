<template>
    <!-- component -->
    <div class="w-full h-56 bg-gray-800 flex justify-center items-center">
        <div class="container flex flex-col gap-4 mx-8">
            <label class="text-gray-100 font-semibold tracking-wider text-lg">Total</label>
            <div
                class="bg-gray-100 rounded-lg w-full h-auto py-4 flex flex-row justify-between divide-x divide-solid divide-gray-400"
            >
                <div class="relative flex-1 flex flex-col gap-2 px-4">
                    <label class="text-gray-800 text-base font-semibold tracking-wider">Total Repos</label>
                    <label class="text-green-800 text-4xl font-bold">152</label>
                    <div
                        class="bg-green-400 rounded-md font-semibold text-xs text-gray-100 p-2 md:right-4 md:bottom-0 md:absolute"
                    >+ 2%</div>
                </div>
                <div class="relative flex-1 flex flex-col gap-2 px-4">
                    <label
                        class="text-gray-800 text-base font-semibold tracking-wider"
                    >Total Commits</label>
                    <label class="text-green-800 text-4xl font-bold">2K</label>
                    <div
                        class="bg-red-400 rounded-md font-semibold text-xs text-gray-100 p-2 md:right-4 md:bottom-0 md:absolute"
                    >- 5%</div>
                </div>
                <div class="relative flex-1 flex flex-col gap-2 px-4">
                    <label class="text-gray-800 text-base font-semibold tracking-wider">Total Size</label>
                    <label class="text-green-800 text-4xl font-bold">318 Mb</label>
                    <div
                        class="bg-green-400 rounded-md font-semibold text-xs text-gray-100 p-2 md:right-4 md:bottom-0 md:absolute"
                    >+ 5%</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
    props: {
        info: {
            type: Object as PropType<any>,
            require: true
        }
    },
    data() {
        return {
            countryCode: ''
        }
    },
    methods: {}
});
</script>