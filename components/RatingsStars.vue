<template>
    <div class="flex items-center shadow-sm rounded p-1 w-max">
        <label :for="id+'rating_1'">
          <input :id="id+'rating_1'" :disabled="props.seal" v-model="rating" class="hidden peer/1" type="radio" name="rating" value="1" />
          <svg
              :class="(rating > 0 ? 'text-yellow-400 ' : 'text-yellow-100 ') + 'h-5 w-5 flex-shrink-0'"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
          >
              <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
          </svg>
        </label>

        <label :for="id+'rating_2'">
        <input :id="id+'rating_2'" :disabled="props.seal" v-model="rating" class="hidden peer/1" type="radio" name="rating" value="2" />
        <svg
            :class="(rating > 1 ? 'text-yellow-400 ' : 'text-yellow-100 ') + 'h-5 w-5 flex-shrink-0'"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
        >
            <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
        </svg>
        </label>

        <label :for="id+'rating_3'">
        <input :id="id+'rating_3'" :disabled="props.seal" v-model="rating" class="hidden peer/1" type="radio" name="rating" value="3" />
        <svg
            :class="(rating > 2 ? 'text-yellow-400 ' : 'text-yellow-100 ') + 'h-5 w-5 flex-shrink-0'"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
        >
            <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
        </svg>
        </label>

        <label :for="id+'rating_4'">
        <input :id="id+'rating_4'" :disabled="props.seal" v-model="rating" class="hidden peer/1" type="radio" name="rating" value="4" />
        <svg
            :class="(rating > 3 ? 'text-yellow-400 ' : 'text-yellow-100 ') + 'h-5 w-5 flex-shrink-0'"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
        >
            <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
        </svg>
        </label>
    
        <label :for="id+'rating_5'">
        <input :id="id+'rating_5'" :disabled="props.seal" v-model="rating" class="hidden peer/1" type="radio" name="rating" value="5" />
        <svg
            :class="(rating > 4 ? 'text-yellow-400 ' : 'text-yellow-100 ') + 'h-5 w-5 flex-shrink-0'"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
        >
            <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
        </svg>
        </label>
    </div>
</template>

<script setup>
const id = Date.now();
const props = defineProps({
  seal: {
    type: Boolean,
    default: false
  },
  rating: {
    type: Number,
    default: 3
  }
})
const rating = ref(props.rating)
</script>
