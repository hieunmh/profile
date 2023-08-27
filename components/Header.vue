<template>
    <header class="fixed top-0 z-10 bg-white dark:bg-black text-black dark:text-white w-full h-16">
        <Container class="h-full">
            <nav class="flex justify-between py-5 items-center h-full">
                <NuxtLink to="/" class="font-bold">
                    <span>{{ logoName }}</span>
                </NuxtLink>

                <button @click="sideOpen = !sideOpen" class="sm:hidden block">
                    <Icon name="ph:list-bold" size="25" />
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
