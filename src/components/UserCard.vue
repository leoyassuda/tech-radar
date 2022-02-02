<template>
    <div v-if="info !== null">
        <div class="flex items-center justify-center h-screen md:h-[32rem]">
            <div
                class="bg-white font-semibold text-center rounded-3xl border shadow-xl p-8 max-w-xs"
            >
                <img
                    class="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto"
                    :src="info?.avatar_url"
                    alt="product designer"
                />
                <h1 class="text-lg text-gray-700">{{ info?.name }}</h1>
                <h3 class="text-sm text-gray-400">{{ info?.login }}</h3>
                <p class="text-xs text-gray-400 my-4">BIO: {{ info?.bio }}</p>
                <a
                    class="bg-indigo-600 px-8 py-2 mt-12 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide"
                    :href="info?.html_url"
                    target="_blank"
                >Github Profile</a>

                <div class="my-2">
                    <div class="inline">
                        <country-flag :country="getCountryCode()" size="normal"></country-flag>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div
        v-if="info === null"
        class="animate-pulse flex items-center justify-center h-screen md:h-[32rem]"
    >
        <div class="bg-white font-semibold text-center rounded-3xl border shadow-xl p-10 max-w-xs">
            <div class="rounded-full bg-slate-700 mb-e h-28 w-28 mx-auto"></div>
            <div class="h-2 bg-slate-700 rounded my-4"></div>
            <div class="h-2 bg-slate-700 rounded my-2 mx-6"></div>
            <div class="h-2 bg-slate-700 rounded my-2 mx-4"></div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { byCountry } from 'country-code-lookup';

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
    methods: {
        getCountryCode(): string {
            const res = byCountry('Brazil')?.iso3;
            console.log(`Country name: ${this.info.location} - code: ${res}`)
            if (res) {
                return res;
            } else {
                return '';
            }
        }
    }
});
</script>