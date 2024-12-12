<template>
    <div
        class="bg-white min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8"
    >
        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <form @submit.prevent="signup" class="space-y-6">
                    <!-- This example requires Tailwind CSS v2.0+ -->
                    <div>
                        <fieldset class="mt-2 w-full">
                            <div class="mx-auto flex items-center gap-4">
                                <input
                                    id="user_radio"
                                    type="radio"
                                    name="type"
                                    checked
                                    value="user"
                                    class="peer/user sr-only bg-white border-gray-200 text-gray-900"
                                    aria-labelledby="memory-option-0-label"
                                />
                                <label
                                    for="user_radio"
                                    class="hover:bg-gray-50 peer-checked/user:bg-indigo-600 peer-checked/user:border-transparent peer-checked/user:text-white hover:bg-indigo-700 border rounded-md py-3 px-3 flex text-indigo-600 items-center justify-center text-sm font-medium uppercase sm:flex-1 cursor-pointer focus:outline-none"
                                >
                                    Regular User
                                </label>

                                <input
                                    id="admin_radio"
                                    type="radio"
                                    name="type"
                                    value="admin"
                                    class="peer/admin sr-only sr-only bg-white border-gray-200 text-gray-900 hover:bg-gray-50 checked:bg-indigo-600 checked:border-transparent checked:text-white hover:bg-indigo-700"
                                    aria-labelledby="memory-option-1-label"
                                />
                                <label
                                    for="admin_radio"
                                    class="hover:bg-gray-50 peer-checked/admin:bg-indigo-600 peer-checked/admin:border-transparent peer-checked/admin:text-white hover:bg-indigo-700 border text-indigo-600 rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1 cursor-pointer focus:outline-none"
                                >
                                    Realtor
                                </label>
                            </div>
                        </fieldset>
                    </div>

                    <div>
                        <label
                            for="name"
                            class="block text-sm font-medium text-gray-700"
                        >
                            Name
                        </label>
                        <div class="mt-1">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                autocomplete="name"
                                required
                                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                    </div>

                    <div>
                        <label
                            for="email"
                            class="block text-sm font-medium text-gray-700"
                        >
                            Email address
                        </label>
                        <div class="mt-1">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autocomplete="email"
                                required
                                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                    </div>

                    <div>
                        <label
                            for="phone"
                            class="block text-sm font-medium text-gray-700"
                        >
                            Phone
                        </label>
                        <div class="mt-1">
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                autocomplete="phone"
                                required
                                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                    </div>

                    <div>
                        <label
                            for="password"
                            class="block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <div class="mt-1">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autocomplete="current-password"
                                required
                                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Sign up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
const router = useRouter();
const state = reactive({
    error: null,
    loading: false,
});
async function signup(e) {
    state.error = null;
    state.loading = true;
    try {
        const body = new FormData(e.target);
        const res = await fetch("/api/signup", {
            body,
            method: "post",
        });

        if (res.status !== 200 && res.status !== 304) {
            if(res.headers.get("Content-Type").includes('json')) {
                throw new Error((await res.json()).message);
            } else {
                throw new Error(await res.text());
            }
        }

        if (body.get("type") == "admin") {
            navigateTo("/dashboard");
        } else {
            navigateTo("/");
        }
    } catch (error) {
        state.error = error.message;
    } finally {
        state.loading = false;
    }
}
</script>
