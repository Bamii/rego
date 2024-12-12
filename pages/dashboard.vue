<template>
    <div class="min-h-full">
        <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
        <div class="max-w-5xl mx-auto flex flex-col flex-1">
            <Header />
            <main class="flex-1 pb-8">
                <!-- Page header -->
                <div
                    class="px-3 bg-white shadow-y flex items-center justify-between"
                >
                    <div class="px-4 sm:px-6 lg:max-w-6xl lg:mr-auto lg:px-8">
                        <div
                            class="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200"
                        >
                            <div class="flex-1 min-w-0">
                                <!-- Profile -->
                                <div class="flex items-center">
                                    <img
                                        class="hidden h-16 w-16 rounded-full sm:block"
                                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80"
                                        alt=""
                                    />
                                    <div>
                                        <div class="flex items-center">
                                            <img
                                                class="h-16 w-16 rounded-full sm:hidden"
                                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80"
                                                alt=""
                                            />
                                            <h1
                                                class="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate"
                                            >
                                                Good morning,
                                                {{ realtor?.name }}
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-6 flex space-x-3 md:mt-0 md:ml-4 lg:mr-3">
                        <button
                            @click="open_create_listing"
                            type="button"
                            class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                        >
                            Create listing
                        </button>
                    </div>
                </div>

                <div class="mt-8">
                    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 class="text-lg leading-6 font-medium text-gray-900">
                            Overview
                        </h2>
                        <div
                            class="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
                        >
                            <!-- Card -->

                            <div
                                class="bg-white overflow-hidden shadow rounded-lg"
                            >
                                <div class="p-5">
                                    <div class="flex items-center">
                                        <div class="flex-shrink-0">
                                            <!-- Heroicon name: outline/scale -->
                                            <svg
                                                class="h-6 w-6 text-gray-400"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                                                />
                                            </svg>
                                        </div>
                                        <div class="ml-5 w-0 flex-1">
                                            <dl>
                                                <dt
                                                    class="text-sm font-medium text-gray-500 truncate"
                                                >
                                                    Houses shown
                                                </dt>
                                                <dd>
                                                    <div
                                                        class="text-lg font-medium text-gray-900"
                                                    >
                                                        {{
                                                            realtor.listings
                                                                .length
                                                        }}
                                                    </div>
                                                </dd>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2
                        class="mb-2 max-w-6xl mx-auto mt-8 px-4 text-lg leading-6 font-medium text-gray-900 sm:px-6 lg:px-8"
                    >
                        Houses List
                    </h2>

                    <AgentListing :listings="realtor?.listings" />
                </div>
            </main>
        </div>
    </div>

    <CreateListing
        :reload="fetchData"
        v-if="create_listing"
        :close="close_create_listing"
    />
</template>

<script setup>
definePageMeta({
    middleware: "realtor-auth",
});
const create_listing = ref(false);

const close_create_listing = () => {
    create_listing.value = false;
};

const open_create_listing = () => {
    create_listing.value = true;
};

const realtor = ref({
    listings: [],
});

const fetchData = async function () {
    try {
        const response = await fetch("/api/mylistings");
        const data = await response.json();
        realtor.value = data.realtor;
    } catch (error) {}
};

onMounted(() => {
    fetchData();
});
</script>
