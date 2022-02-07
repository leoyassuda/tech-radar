<template>
    <div v-for="repo of aaa" class="flex flex-wrap items-center py-2 px-2">
        <div class="h-auto flex justify-center items-center">
            <div
                class="container mx-auto max-w-xs rounded-lg overflow-hidden shadow-lg my-2 bg-white"
            >
                <div class="relative m-2 bg-blend-darken">
                    <img class="w-1/4 bg-blend-darken inline" :src="repo.img" alt="Language Icon" />
                </div>
                <pre>{{ repo.language }}</pre>
                <div class="py-6 px-3 text-center tracking-wide grid grid-cols-3 gap-6">
                    <div class="repos-quantity">
                        <p class="text-lg">{{ repo?.quantity }}</p>
                        <p class="text-gray-400 text-sm">Repos</p>
                    </div>
                    <div class="repo-size">
                        <p class="text-lg">{{ repo?.size }}</p>
                        <p class="text-gray-400 text-sm">Size (Mb)</p>
                    </div>
                    <div class="repo-watchers">
                        <p class="text-lg">{{ repo?.stargazers_count }}</p>
                        <p class="text-gray-400 text-sm">Watchers</p>
                    </div>
                </div>
                <div class="text-center w-full py-4">
                    <Disclosure>
                        <DisclosureButton
                            class="p-2 relative rounded-full transition ease-in duration-200 focus:outline-none"
                        >
                            <svg
                                viewBox="0 0 20 20"
                                enable-background="new 0 0 20 20"
                                class="w-6 h-6"
                            >
                                <path
                                    fill="#FFFFFF"
                                    d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                C15.952,9,16,9.447,16,10z"
                                />
                            </svg>
                        </DisclosureButton>
                        <transition
                            enter-active-class="transition duration-150 ease-out"
                            enter-from-class="transform scale-95 opacity-0"
                            enter-to-class="transform scale-100 opacity-100"
                            leave-active-class="transition duration-75 ease-out"
                            leave-from-class="transform scale-100 opacity-100"
                            leave-to-class="transform scale-95 opacity-0"
                        >
                            <DisclosurePanel class="text-gray-500">
                                <a
                                v-for="item in repo.repos"
                                :key="item.name"
                                :href="item.href"
                                target="_blank"
                                class="flex items-center p-0 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                            >
                                <div
                                    class="flex items-center justify-center flex-shrink-0 w-14 h-10 text-white sm:h-16 sm:w-12"
                                >
                                </div>
                                <ArrowCircleRightIcon class="h-5 w-5 text-purple-700"/>
                                <div class="ml-4">

                                    <p class="text-sm font-medium text-gray-900">{{ item.name }}</p>
                                </div>
                                </a>
                            </DisclosurePanel>
                        </transition>
                    </Disclosure>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

interface StructureRepos {
    language: string;
    img: string;
    quantity: number;
    size: number;
    stargazers_count: number;
    repos: StructureRepoDetail[]
}

interface StructureRepoDetail {
    name: string;
    href: string;
}

import { defineComponent, PropType, ref } from "vue";
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from '@headlessui/vue'
import { ArrowCircleRightIcon } from '@heroicons/vue/solid'
import { Repo } from "@/model/Repo";
import { reduceCountLanguage, getKeys, getValues, groupBy } from "@/util/functions";

export default defineComponent({
    props: {
        repos: {
            type: Object as PropType<Repo[]>,
            required: true
        }
    },
    data() {
        return {
            repoList: [{
                language: 'java',
                img: '/images/java.png',
                quantity: 10,
                size: 357,
                stargazers_count: 7,
                repos: [{
                    name: 'Project 1',
                    href: 'https://github.com'
                }]
            }]
        }
    },
    methods: {
        getImgLang(language: string): string {
            console.log('get img: ' + language)
            return new URL(`./images/${language}.png`, import.meta.url).href;
        },
    },
    setup({ repos }) {
        function mapStructure(repos: Repo[]) {
            let reduced = repos.map(({ name, html_url, size, language, stargazers_count }) => {
                return { name, html_url, size, language, stargazers_count }
            });
            return reduced;
        }

        const repoGroupedByLang = groupBy(repos, repo => repo.language);

        console.log('map repos', repoGroupedByLang);

        let aaa: StructureRepos[] = [];

        repoGroupedByLang.forEach((lang, key) => {
            const languageString = key !== null ? key.toString().toLowerCase() : 'github'
            let arrAAA: StructureRepoDetail[] = []
            let sumQuanaity = lang.length;
            let sumSize = 0;
            let sumStargazers = 0;
            lang.forEach((item) => {
                console.log(item.name);
                arrAAA.push({
                    name: item.name,
                    href: item.html_url
                });
                sumSize+=item.size;
                sumStargazers+=item.stargazers_count;
            })
            aaa.push({
                language: languageString,
                img: `/images/${languageString}.png`,
                size: sumSize,
                quantity: sumQuanaity,
                repos: arrAAA,
                stargazers_count: sumStargazers
            })
        })

        console.log('aaaaa', aaa);

        return {
            aaa
        }
    },
    components: {
        Disclosure,
        DisclosureButton,
        DisclosurePanel,
        ArrowCircleRightIcon,
    }
});
</script>

<style scoped>
button {
    background-color: #6617cb;
    background-image: linear-gradient(315deg, #6617cb 0%, #cb218e 74%);
    box-shadow: 0 0 0 0 #ec008c, 0.2rem 0.2rem 30px #6617cb;
}
button:hover {
    box-shadow: 0 0 0 0 #ec008c, 0.2rem 0.2rem 60px #6617cb;
}
</style>