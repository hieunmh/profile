<template>
    <section id="tech">
        <Container>
            <div class="my-5 py-10 relative">
                <div class="w-[100%] md:w-[60%]">
                    <h2 class="">
                        <span class="block font-black text-2xl">and finally,</span>

                        <span class="block font-black text-9xl">tech.</span>

                        <span class="block font-bold text-xl">
                            In my personal journey, I already worked with some techonologies,
                            and here they are:
                        </span>
                    </h2>

                    <div class="" v-for="(el, ind) in skills" :key="ind">
                        <TagCard :el="el" />
                    </div>
                </div>

                <div class="w-[40%]">
                    <img width="500" height="600" src="/icons/bg-cover-4.gif"
                        class="hidden md:block w-[500px] h-[600px] z-0 object-cover 
                        absolute top-[10%] right-0 mix-blend-difference"
                    />

                    <div class="hidden md:block bg-cover-color absolute top-10 
                        -right-[50%] w-full h-[60%] mix-blend-difference"
                    >
                    </div>
                </div>

                <div class="w-full text-center font-semibold">
                    <p>HOVER OVER A SKILL FOR CURRENCY PROFICIENCY</p>
                </div>
            </div>  

        </Container>
    </section>
</template>

<script setup>


const skills = ref([
    {
        tag: "Languages",
        skills: [
            { id: 1, icon: "fa6-brands:square-js", name: "JavaScript", percent: 75 },
            { id: 2, icon: "simple-icons:typescript", name: "TypeScript", percent: 50 },
            { id: 3, icon: "cib:cplusplus", name: "C++", percent: 50 },
            { id: 4, icon: "simple-icons:python", name: "Python", percent: 50 },
            { id: 5, icon: "cib:java", name: "Java", percent: 50 },
            { id: 6, icon: "simple-icons:php", name: "PHP", percent: 60 },
        ],
    },
    {
        tag: "Frameworks",
        skills: [
            { id: 1, icon: "tabler:brand-nodejs", name: "NodeJS", percent: 30 },
            { id: 2, icon: "ri:reactjs-fill", name: "ReactJS", percent: 40 },
            { id: 3, icon: "cib:vue-js", name: "VueJS", percent: 75 },
            { id: 4, icon: "cib:nuxt-js", name: "NuxtJS", percent: 65 },
            { id: 5, icon: "cib:laravel", name: "Laravel", percent: 45 },
            { id: 6, icon: "devicon:express", name: "ExpressJS", percent: 45 },
        ],
    },
    {
        tag: "CSS Libraries",
        skills: [
            { id: 1, icon: "mdi:tailwind", name: "TailwindCSS", percent: 55 },
            { id: 2, icon: "bi:bootstrap", name: "Bootstrap", percent: 40 },
        ],
    },
    {
        tag: "Database",
        skills: [
            { id: 1, icon: "tabler:brand-mysql", name: "MySQL", percent: 55 },
            { id: 2, icon: "teenyicons:mongodb-outline", name: "MongoDB", percent: 40 },
            { id: 3, icon: "simple-icons:prisma", name: "Prisma", percent: 45 },
            { id: 4, icon: "devicon-plain:supabase", name: "Supabase", percent: 45 },
        ],
    },
    {
        tag: "Tools",
        skills: [
            { id: 1, icon: "teenyicons:docker-solid", name: "Docker", percent: 30 },
            { id: 2, icon: "cib:postman", name: "Postman", percent: 50 },
        ],
    },
]);
</script>

<style scoped>
.bg-cover-color {
  background: linear-gradient(
    180deg,
    #000000 0%,
    rgba(74, 25, 112, 0.35) 71.35%,
    rgba(104, 35, 157, 0) 100%
  );
  transform: rotate(79deg);
}
</style>