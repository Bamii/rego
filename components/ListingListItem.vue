<template>
    <div class="group relative p-4 border-r border-b border-gray-200 sm:p-6">
        <div
            class="rounded-lg overflow-hidden bg-gray-200 aspect-w-1 aspect-h-1 group-hover:opacity-75"
        >
            <img
                :src="listing.images[0]"
                alt="TODO"
                class="w-full h-full object-center object-cover"
            />
        </div>
        <div class="pt-10 pb-4 text-center">
            <h3 class="text-sm font-medium text-gray-900">
                <a :href="'/listing/' + listing.id">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    {{ listing.title }}
                </a>
            </h3>
            <div class="mt-3 flex flex-col items-center">
                <p class="text-sm text-white mr-2">
                    {{ average(listing) }} sdf
                    <span class="sr-only"> out of 5 stars</span>
                </p>
                <RatingsStars :rating="average(listing)" />
                <p class="mt-1 text-sm text-gray-500">
                    {{ listing?.reviews?.length }} reviews
                </p>
            </div>
            <p class="mt-4 text-base font-medium text-gray-900">
                ${{ listing?.price.toLocaleString() }}
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
const { listing } = defineProps<{
    listing: any;
}>();
const average = (listing) => {
  const total = listing?.reviews?.map(e => e.rating)
    .reduce((acc, curr) => (acc + curr), 0) ?? 0;

    const lght = listing?.reviews?.length ?? 1
  return Math.floor(total / lght);
}
</script>
