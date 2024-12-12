<template>
    <!-- Product grid -->
    <section aria-labelledby="products-heading" class="max-w-7xl mx-auto overflow-hidden sm:px-6 lg:px-8">
      <h2 id="products-heading" class="sr-only">Products</h2>

      <div class="-mx-px border-l border-gray-200 grid grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
        <ListingListItem :listing="listing" v-for="listing in listings" />
      
        <div v-if="listings?.length == 0 && !loading" class="text-black text-center text-xl">
          this is an empty list
        </div>

        <div v-if="loading" class="text-black text-center text-xl">
          loading list
        </div>
      </div>
    </section>
</template>

<script setup>
  const listings = ref([])
  const loading = ref(true)

  onMounted(() => {
    (async function() {
      try {
        const response = await fetch('/api/listings');
        const data = await response.json();
        listings.value = data.listings;
      } catch (error) {
        
      } finally {
        loading.value = false
      }
    })()
  })
</script>