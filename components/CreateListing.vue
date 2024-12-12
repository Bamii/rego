<template>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div
        class="fixed z-10 inset-0 overflow-y-auto"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
    >
        <div
            class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
        >
            <!--
      Background overlay, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    -->
            <div
                class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                aria-hidden="true"
            ></div>

            <!-- This element is to trick the browser into centering the modal contents. -->
            <span
                class="hidden sm:inline-block sm:align-middle sm:h-screen"
                aria-hidden="true"
                >&#8203;</span
            >

            <div
                class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full sm:p-6"
            >
                <div>
                    <ErrorComponent v-if="state.error">
                        {{ state.error }}
                    </ErrorComponent>

                    <form
                        @submit.prevent="create_listing"
                        class="space-y-8 divide-y divide-gray-200"
                    >
                        <div class="space-y-8 divide-y divide-gray-200">
                            <div>
                                <div>
                                    <h3
                                        class="text-lg leading-6 font-medium text-gray-900"
                                    >
                                        Create a listing
                                    </h3>
                                </div>

                                <div
                                    class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6"
                                >
                                    <div class="sm:col-span-6">
                                        <label
                                            for="title"
                                            class="block text-sm font-medium text-gray-700"
                                        >
                                            Title
                                        </label>
                                        <div class="mt-1">
                                            <input
                                                id="title"
                                                name="title"
                                                type="text"
                                                required
                                                autocomplete="title"
                                                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>
                                    </div>

                                    <div class="sm:col-span-6">
                                        <label
                                            for="location"
                                            class="block text-sm font-medium text-gray-700"
                                        >
                                            Location
                                        </label>
                                        <div class="mt-1">
                                            <input
                                                id="location"
                                                name="location"
                                                required
                                                type="text"
                                                autocomplete="location"
                                                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>
                                    </div>

                                    <div class="sm:col-span-6">
                                        <label
                                            for="price"
                                            class="block text-sm font-medium text-gray-700"
                                        >
                                            Price
                                        </label>
                                        <div class="mt-1">
                                            <input
                                                id="price"
                                                name="price"
                                                type="number"
                                                required
                                                min="0"
                                                autocomplete="price"
                                                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>
                                    </div>

                                    <div class="sm:col-span-6">
                                        <label
                                            for="type"
                                            class="block text-sm font-medium text-gray-700"
                                        >
                                            Listing Type
                                        </label>
                                        <div class="mt-1">
                                            <select
                                                id="type"
                                                name="type"
                                                required
                                                autocomplete="listing-type"
                                                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                            >
                                                <option value="OneBedroom">
                                                    1 Bedroom Apartment
                                                </option>
                                                <option value="TwoBedroom">
                                                    2 Bedroom Apartment
                                                </option>
                                                <option value="Bungalow">
                                                    Bungalow
                                                </option>
                                                <option value="SelfContain">
                                                    Self Contain
                                                </option>
                                            </select>
                                        </div>
                                    </div>

                                    <div
                                        class="sm:col-span-6 grid grid-cols-3 gap-4"
                                    >
                                        <div class="">
                                            <label
                                                for="bath"
                                                class="block text-sm font-medium text-gray-700"
                                            >
                                                Bath
                                            </label>
                                            <div class="mt-1">
                                                <input
                                                    defaultValue="0"
                                                    id="bath"
                                                    name="bath"
                                                    type="number"
                                                    min="0"
                                                    autocomplete="bath"
                                                    class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>
                                        </div>

                                        <div class="">
                                            <label
                                                for="toilet"
                                                class="block text-sm font-medium text-gray-700"
                                            >
                                                Toilets
                                            </label>
                                            <div class="mt-1">
                                                <input
                                                    defaultValue="0"
                                                    id="toilet"
                                                    name="toilet"
                                                    type="number"
                                                    min="0"
                                                    autocomplete="toilet"
                                                    class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>
                                        </div>

                                        <div class="">
                                            <label
                                                for="parking_space"
                                                class="block text-sm font-medium text-gray-700"
                                            >
                                                Parking Spaces
                                            </label>
                                            <div class="mt-1">
                                                <input
                                                    defaultValue="0"
                                                    id="parking_space"
                                                    name="parking_space"
                                                    type="number"
                                                    min="0"
                                                    autocomplete="parking_space"
                                                    class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="sm:col-span-6">
                                        <label
                                            for="description"
                                            class="block text-sm font-medium text-gray-700"
                                        >
                                            Description
                                        </label>
                                        <div class="mt-1">
                                            <textarea
                                                id="description"
                                                required
                                                name="description"
                                                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                            >
                                            </textarea>
                                        </div>
                                    </div>

                                    <div class="sm:col-span-6">
                                        <label
                                            for="images"
                                            class="block text-sm font-medium text-gray-700"
                                        >
                                            Images
                                        </label>
                                        <div class="flex gap-2 py-2">
                                          <div v-for="file in state.files" class="">
                                            <img :src="file" alt="" class="h-10 w-auto rounded">
                                          </div>
                                        </div>
                                        <div
                                            class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
                                        >
                                            <div class="space-y-1 text-center">
                                                <svg
                                                    class="mx-auto h-12 w-12 text-gray-400"
                                                    stroke="currentColor"
                                                    fill="none"
                                                    viewBox="0 0 48 48"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                </svg>
                                                <div
                                                    class="flex text-sm text-gray-600"
                                                >
                                                    <label
                                                        for="images"
                                                        class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                                    >
                                                        <span
                                                            >Upload a file</span
                                                        >
                                                        <input
                                                            @change="display_images"
                                                            id="images"
                                                            name="images"
                                                            required
                                                            type="file"
                                                            class="sr-only"
                                                            multiple
                                                        />
                                                    </label>
                                                    <p class="pl-1">
                                                        or drag and drop
                                                    </p>
                                                </div>
                                                <p
                                                    class="text-xs text-gray-500"
                                                >
                                                    PNG, JPG, GIF up to 10MB
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="pt-5 w-full">
                            <div class="flex justify-end">
                                <button
                                    @click="close"
                                    type="button"
                                    class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Cancel
                                </button>
                                <button
                                    :disabled="state.loading"
                                    type="submit"
                                    class="disabled:cursor-pointer ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    {{ state.loading ? "loading..." : "Save" }}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    close: Function,
});
const state = reactive({
    loading: false,
    error: null,
    files: []
});
const image_display_ref = ref();

async function display_images(e) {
  const files = [...(e.target.files ?? [])];
        (async function () {
          const data = await Promise.all(
            files.map((file) => {
              return new Promise((resolve, reject) => {
                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function () {
                  resolve(reader.result);
                };
                reader.onerror = function (error) {
                  reject(null);
                };
              });
            })
          )
          state.files = data;
        })();
}

async function create_listing(e) {
    state.loading = true;
    state.error = null;
    try {
        const body = new FormData(e.target);
        await fetch("/api/listings", {
            body,
            method: "post",
        });

        if (res.status !== 200 || res.status !== 304) {
            if(res.headers.get("Content-Type").includes('json')) {
                throw new Error((await res.json()).message);
            } else {
                throw new Error(await res.text());
            }
        }
    } catch (error) {
        state.error = error.message;
    } finally {
        state.loading = false;
    }
}
</script>
