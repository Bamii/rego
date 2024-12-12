<template>
<form @submit.prevent="review_listing" class="">
  <label for="content" class="mb-2 block text-sm font-medium text-gray-700">Add your review</label>
  <div v-if="user?.type == 'user'">
    <RatingsStars :rating="3" />
    <div class="mt-1">
      <textarea  rows="4" name="content" id="content" class="disabled:cursor-not-allowed disabled:bg-gray-300 p-2 text-black border bg-white shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"></textarea>
    </div>
    <UButton type="submit" class="mt-2 bg-black"> Submit </UButton>
  </div>
  <div v-else class="rounded p-5 bg-gray-100 text-gray-700">
    Please <a href="/login" class="underline">login as a regular user</a> first
  </div>
</form>
</template>

<script setup>

const props = defineProps({
  reload: Function,
  listing_id: Number
})

const loading = ref(false)
const user = useUser();
async function review_listing(e) {
  if(!user.value || user.value.type !== 'user') return;

  loading.value = true
  try {
    const res = await fetch('/api/listing/review?id='+props.listing_id, { method: 'post', body: new FormData(e.target) });
    props.reload();
  } catch (error) {
  } finally {
    loading.value = false;
  }
}
</script>