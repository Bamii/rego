
<template>
<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<div class="bg-white">
  <Header />

  <main class="pb-24">
    <div class="text-center py-16 px-4 sm:px-6 lg:px-8">
      <h1 class="text-4xl font-extrabold tracking-tight text-gray-900">Rent Houses</h1>
    </div>

    <GeneralListings />

    <!-- <Pagination /> -->
  </main>
</div>

</template>

<script setup>

</script>
