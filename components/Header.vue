<template>
    <header class="fixed top-0 z-10 bg-white dark:bg-black text-black dark:text-white w-full h-17">
        <Container class="h-full">
            <nav class="flex justify-between py-5 items-center h-full">
                <NuxtLink to="/" class="font-bold">
                    <span>{{ logoName }}</span>
                </NuxtLink>

                <button @click="sideOpen = !sideOpen" class="sm:hidden block">
                    <Icon name="ph:list-bold" size="25" 
                        class="hover:bg-black hover:text-white dark:hover:bg-white 
                                dark:hover:text-black p-1 rounded-full" 
                    />
                </button>

                <div class="hidden sm:flex items-center gap-20">
                    <ul class="flex gap-10">
                        <NavItem v-for="(link, index) in navLinks"  :key="index"
                            :name="link.name" :path="link.path"
                        />
                    </ul>

                    <div class="flex gap-5">
                        <button class="dark:hidden block" @click="colorMode.preference = 'dark'">
                            <Icon name="bi:moon" size="25" 
                                class="hover:bg-black hover:text-white p-1 rounded-full" 
                            />
                        </button>

                        <button class="hidden dark:block p-1" @click="colorMode.preference = 'light'">
                            <Icon name="material-symbols:sunny-outline-rounded" size="25" 
                                class="p-1 rounded-full hover:bg-white hover:text-black" 
                            />
                        </button>
                    </div>
                </div>
            </nav>
        </Container>
        <div class="border-b border-b-black dark:border-b-white" />
    </header>

    <aside v-if="sideOpen" class="top-0 left-0 h-screen w-full bg-white 
        dark:bg-black text-black dark:text-white z-30 fixed"
    >
        <Container>
            <div class="py-5">
                <div class="flex items-center justify-between">
                    <NuxtLink to="/" class="font-bold" @click="sideOpen = !sideOpen">
                        <span>{{ logoName }}</span>
                    </NuxtLink>

                    <button class="dark:bg-black bg-white rounded-full" @click="sideOpen = !sideOpen">
                        <Icon name="ic:round-close" size="25" 
                            class="hover:bg-black hover:text-white dark:hover:bg-white 
                                dark:hover:text-black p-1 rounded-full" 
                        />
                    </button>
                </div>

                <ul class="flex flex-col items-center text-center gap-8 text-xl mt-14">
                    <NavItem v-for="(link, index) in navLinks"  :key="index"
                            :name="link.name" :path="link.path" @click="sideOpen = !sideOpen"
                    />
                </ul>

                <div class="flex justify-center items-center mt-20 px-16">
                    <button class="dark:hidden block" @click="colorMode.preference = 'dark'">
                        <Icon name="bi:moon" size="25" 
                            class="hover:bg-black hover:text-white p-1 rounded-full" 
                        />
                    </button>

                    <button class="hidden dark:block p-1" @click="colorMode.preference = 'light'">
                        <Icon name="material-symbols:sunny-outline-rounded" size="25" 
                            class="p-1 rounded-full hover:bg-white hover:text-black" 
                        />
                    </button>
                </div>
            </div>
        </Container>
    </aside>
</template>

<script setup>

const colorMode = useColorMode();

const sideOpen = ref(false);

const logoName = ref(`</>`);

const navLinks = ref([
  {
    name: "Home",
    path: "home",
  },
  {
    name: "Projects",
    path: "projects",
  },
  {
    name: "Tech",
    path: "tech",
  },
  {
    name: "Contact",
    path: "contact",
  },
]);

</script>
