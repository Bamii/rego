<template>
    <header class="relative bg-white">
        <nav aria-label="Top" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="border-b border-gray-200">
                <div class="h-16 flex items-center justify-between">
                    <div>
                        <a class="text-lg text-black" href="/dashboard" v-if="user && user.type == 'admin'">Dashboard</a>
                    </div>

                    <div class="flex-1 flex items-center justify-end">
                        <!-- Account -->
                        <div
                            v-if="user"
                            class="p-2 text-gray-400 flex items-center gap-2 hover:text-gray-500 lg:ml-4"
                        >
                            <span class="sr-only">Account</span>
                            <!-- Heroicon name: outline/user -->
                            <svg
                                class="w-6 h-6"
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
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                            </svg>
                            <div class="flex flex-col">
                                <div class="text-sm">{{ user.name }}</div>
                                <div class="text-xs">
                                    {{ user.email }} ({{ user.type }})
                                </div>
                            </div>

                            <button
                                @click="logout"
                                :disabled="state.loading"
                                type="button"
                                class="disabled:cursor-not-allowed inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                            >
                                {{ state.loading ? "loading" : "Logout" }}
                            </button>
                        </div>

                        <div v-else>
                            <!-- This example requires Tailwind CSS v2.0+ -->
                            <span
                                class="relative z-0 inline-flex shadow-sm rounded-md"
                            >
                                <a href="/login"
                                    ><button
                                        type="button"
                                        class="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                                    >
                                        login
                                    </button>
                                </a>
                                <a href="/signup"
                                    ><button
                                        type="button"
                                        class="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                                    >
                                        signup
                                    </button>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>
await fetchUser();
const user = useUser();
const state = reactive({
    loading: false,
});

async function logout() {
    state.loading = true;
    try {
        await fetch("/api/logout", {
            method: "post",
        });

        user.value = null;
        navigateTo("/");
    } catch (error) {
        state.error = error.message;
    } finally {
        state.loading = false;
    }
}
</script>
