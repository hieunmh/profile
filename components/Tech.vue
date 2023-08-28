<template>
    <section id="tech">
        <Container>
            <h2 class="w-full font-bold text-2xl my-6 flex justify-center items-center cursor-pointer">
                <div>
                    Tehnology
                    <Icon name="heroicons:wrench-screwdriver-solid" class="ml-3" />
                </div>
            </h2>
    
            <div class="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-4 xs:grid-cols-2 grid-cols-3 gap-4">
                <div class="flex items-center justify-center relative  aspect-square 
                    rounded-lg p-0 " 
                    v-for="(skill, category) in skillset" :key="category"
                >
                    <div class=" opacity-100">
                        <Icon :name="skill.icon" :size="iconSize" class="dark:text-green-50 dark:fill-white" />
                    </div>

                    <div class="absolute dark:bg-gray-700 bg-gray-400 w-full h-full text-3xl rounded-lg 
                        opacity-0 hover:opacity-70 font-bold cursor-pointer"
                    >
                        <div class="flex justify-center items-center w-full h-full text-gray-950 dark:text-white">
                            {{ skill.percent }}%
                        </div>
                    </div>
                </div>

            </div>  
        </Container>
    </section>
</template>

<script setup>
let iconSize = ref(null);

let windowWidth = ref(process.client ? window.innerWidth: '');

onMounted(() => {
    watchEffect(() => {
        window.addEventListener('resize', function() {
            windowWidth.value = window.innerWidth;
        });

        if (windowWidth.value <= 992 && windowWidth.value > 830) {
            iconSize.value = 60;
        } else if (windowWidth.value > 992) {
            iconSize.value = 80;
        } else if (windowWidth.value < 830 && windowWidth.value >= 767) {
            iconSize.value = 40;
        } else if (windowWidth.value < 767) {
            iconSize.value = 80;
        }
    });
})


watch(() => windowWidth.value, () => {
    if (windowWidth.value <= 992 && windowWidth.value > 830) {
        iconSize.value = 60;
    } else if (windowWidth.value > 992) {
        iconSize.value = 80;
    } else if (windowWidth.value < 830 && windowWidth.value >= 767) {
        iconSize.value = 40;
    } else if (windowWidth.value < 767) {
        iconSize.value = 80;
    }
});

const skillset = [
    { name: 'Javascript', icon: 'fluent:code-js-16-filled', percent: 75 },
    { name: 'Typescript', icon: 'teenyicons:typescript-solid', percent: 50 },
    { name: 'C++', icon: 'simple-icons:cplusplus', percent: 50 },
    { name: 'Java', icon: 'mdi:language-java', percent: 50 },
    { name: 'PHP', icon: 'logos:php-alt', percent: 65 },
    { name: 'Python', icon: 'simple-icons:python', percent: 60 },
    { name: 'VueJS', icon: 'nonicons:vue-16', percent: 75 }, 
    { name: 'NuxtJS', icon: 'simple-icons:nuxtdotjs', percent: 70 },
    { name: 'ReactJS', icon: 'ri:reactjs-fill', percent: 40 }, 
    { name: 'TailwindCSS', icon: 'mdi:tailwind', percent: 50 },
    { name: 'MySQL', icon: 'tabler:brand-mysql', percent: 55 },
    { name: 'MongoDB', icon: 'teenyicons:mongodb-solid', percent: 40 }, 
    { name: 'Supabase', icon: 'devicon-plain:supabase', percent: 45 },
    { name: 'Prisma', icon: 'simple-icons:prisma', percent: 45 },
    { name: 'NodeJS', icon: 'tabler:brand-nodejs', percent: 30 },
    { name: 'ExpressJS', icon: 'devicon:express', percent: 40 },
    { name: 'Laravel', icon: 'mdi:laravel', percent: 55 },
    { name: 'Docker', icon: 'mdi:docker', percent: 40 }, 
];
</script>