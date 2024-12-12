<template>
    <div class="bg-white">
        <Header />

        <main
            class="mt-8 max-w-2xl mx-auto pb-16 px-4 sm:pb-24 sm:px-6 lg:max-w-7xl lg:px-8"
        >
            <nav class="flex mb-10" aria-label="Breadcrumb">
                <ol
                    role="list"
                    class="bg-white rounded-md shadow px-6 flex space-x-4"
                >
                    <li class="flex">
                        <div class="flex items-center">
                            <div class="text-gray-400 hover:text-gray-500">
                                <!-- Heroicon name: solid/home -->
                                <svg
                                    class="flex-shrink-0 h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                                    />
                                </svg>
                                <span class="sr-only">Home</span>
                            </div>
                        </div>
                    </li>

                    <li class="flex">
                        <div class="flex items-center">
                            <svg
                                class="flex-shrink-0 w-6 h-full text-gray-200"
                                viewBox="0 0 24 44"
                                preserveAspectRatio="none"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                            >
                                <path
                                    d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z"
                                />
                            </svg>
                            <a
                                href="/"
                                class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                                >Listings</a
                            >
                        </div>
                    </li>
                </ol>
            </nav>

            <div class="lg:grid lg:grid-cols-12 lg:auto-rows-min lg:gap-x-8">
                <div class="lg:col-start-8 lg:col-span-5">
                    <div class="flex justify-between">
                        <h1 class="text-xl font-medium text-gray-900">
                            {{ listing?.title }}
                        </h1>
                        <p class="text-xl font-medium text-gray-900">
                            ${{ listing?.price.toLocaleString() }}
                        </p>
                    </div>
                    <!-- Reviews -->
                    <div class="mt-4 flex flex-row items-center">
                        <h2 class="sr-only">Reviews</h2>
                        <div class="flex items-center ml-auto text-gray-700">
                            <p class="text-sm text-gray-700 mr-2">
                                {{ average }} / 5
                                <span class="sr-only"> out of 5 stars</span>
                            </p>

                            <RatingsStars :rating="average" :seal="true" />
                        </div>
                    </div>
                </div>

                <!-- Image gallery -->
                <div
                    class="mt-8 lg:mt-0 lg:col-start-1 lg:col-span-7 lg:row-start-1 lg:row-span-3"
                >
                    <h2 class="sr-only">Images</h2>

                    <div
                        class="grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-3 lg:gap-8"
                    >
                        <img
                            :src="listing?.images[0]"
                            alt="Image of property"
                            class="col-span-4 w-full lg:row-span-2 rounded-lg"
                        />
                        <img
                            v-for="image in listing?.images ?? []"
                            :src="image"
                            alt="Image of property"
                            class="lg:col-span-1 lg:row-span-1 rounded-lg"
                        />
                    </div>
                </div>

                <div class="mt-8 lg:col-span-5">
                    <div class="grid grid-cols-3 gap-2 w-[60%]">
                        <!-- Color picker -->
                        <div>
                            <div class="flex items-center w-max gap-1">
                                <h2 class="text-sm font-semibold text-gray-900">
                                    Bath
                                </h2>
                                <UIcon
                                    name="i-wi-humidity"
                                    class="text-black w-5 h-5"
                                />
                            </div>
                            <div class="text-lg text-gray-900">
                                {{ listing?.bath }}
                            </div>
                        </div>

                        <div>
                            <div class="flex items-center w-max gap-1">
                                <h2 class="text-sm font-semibold text-gray-900">
                                    Toilets
                                </h2>
                                <UIcon
                                    name="i-ic-baseline-accessibility-new"
                                    class="text-black w-5 h-5"
                                />
                            </div>
                            <div class="text-lg text-gray-900">
                                {{ listing?.toilet }}
                            </div>
                        </div>

                        <div>
                            <div class="flex items-center w-max gap-1">
                                <h2 class="text-sm font-semibold text-gray-900">
                                    Parking Spaces
                                </h2>
                                <UIcon
                                    name="i-cbi-roomscarport"
                                    class="text-black w-5 h-5"
                                />
                            </div>
                            <div class="text-lg text-gray-900">
                                {{ listing?.parking_space }}
                            </div>
                        </div>
                    </div>

                    <!-- Product details -->
                    <div class="mt-10 rounded border p-2 flex flex-col gap-2">
                        <h2 class="text-sm font-medium text-gray-900">
                            Description
                        </h2>

                        <div
                            class="mt-4 prose prose-sm text-gray-500 font-light"
                        >
                            <p>
                                {{ listing?.description }}
                            </p>
                        </div>
                    </div>

                    <div class="mt-10 rounded border p-2 flex flex-col gap-2">
                        <h2 class="text-sm font-medium text-gray-900">
                            Contact Realtor
                        </h2>

                        <div
                            class="mt-4 prose prose-sm text-gray-500 font-light"
                        >
                            <div class="flex items-center gap-2">
                                <div>
                                    <UIcon
                                        name="i-ic-baseline-phone"
                                        class="text-black w-5 h-5"
                                    />
                                </div>
                                <div>
                                    {{ listing?.realtor.phone }}
                                </div>
                            </div>
                            <div class="flex items-center gap-2">
                                <div>
                                    <UIcon
                                        name="i-ic-baseline-alternate-email"
                                        class="text-black w-5 h-5"
                                    />
                                </div>
                                <div>
                                    {{ listing?.realtor.email }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- This example requires Tailwind CSS v2.0+ -->
            <div class="bg-white">
                <div
                    class="max-w-2xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:py-32 lg:px-8 lg:grid lg:grid-cols-12 lg:gap-x-8"
                >
                    <div class="lg:col-span-4">
                        <h2
                            class="mb-3 text-2xl font-extrabold tracking-tight text-gray-900"
                        >
                            Customer Reviews
                        </h2>

                        <ReviewListing :reload="reload" :listing_id="id" />
                    </div>

                    <div class="mt-16 lg:mt-0 lg:col-start-6 lg:col-span-7">
                        <h3 class="sr-only">Recent reviews</h3>

                        <div class="flow-root">
                            <div class="-my-12 divide-y divide-gray-200">
                                <div
                                    v-for="review in listing?.reviews"
                                    class="py-12"
                                >
                                    <div class="flex items-center">
                                        <img
                                            src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                                            alt="Emily Selman."
                                            class="h-12 w-12 rounded-full"
                                        />
                                        <div class="ml-4">
                                            <h4
                                                class="text-sm font-bold text-gray-900"
                                            >
                                                {{ review.user.name }}
                                            </h4>
                                            <RatingsStars
                                                :seal="true"
                                                :rating="review.rating"
                                            />
                                            <p class="sr-only">
                                                {{ review.rating }} out of 5
                                                stars
                                            </p>
                                        </div>
                                    </div>

                                    <div
                                        class="mt-4 space-y-6 text-base italic text-gray-600"
                                    >
                                        <p>{{ review.content }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
const listing = ref(null);
const route = useRoute();
const id = route.params.id;

const average = computed(() => {
    const total =
        listing?.value?.reviews
            ?.map((e) => e.rating)
            .reduce((acc, curr) => acc + curr, 0) ?? 0;

    const lght = listing?.value?.reviews?.length ?? 1;
    return listing?.value?.reviews.length == 0 ? 0 : Math.floor(total / lght);
});

const fetchData = async function () {
    try {
        const res = await fetch("/api/listing/single?id=" + route.params.id);
        const data = await res.json();
        listing.value = data;
    } catch (error) {}
};

function reload() {
    fetchData();
}

onMounted(() => {
    fetchData();
});
</script>

<!-- // page -->
