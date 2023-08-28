<template>
    <div class="h-[800px] sm:h-[600px] md:h-[550px] lg:h-[400px] xl:h-[450px] 
        2xl:h-[450px] flex flex-col sm:flex-row items-center justify-center sm:justify-between"
    >
        <div class="my-5 mr-5 p-10">
            <p class="flex gap-2 mb-5">
                <span class="dark:block hidden">
                    <Icon name="material-symbols:check-circle-outline-rounded" color="white" />
                </span>

                <span class="dark:hidden block">
                    <Icon name="material-symbols:check-circle-outline-rounded" color="black"/>
                </span>
        
                <span class="dark:block hidden">
                    <Icon name="mdi:slash-forward" color="white" />
                </span>

                <span class="dark:hidden block">
                    <Icon name="mdi:slash-forward" color="black"/>
                </span>
        
                <span>Finished</span>
            </p>
    
            <h3 class="text-4xl md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl mb-5">
                <span>{{ el.name }} </span>
            </h3>
    
            <h4 class="text-xl md:text-sm lg:text-md xl:text-lg 2xl:text-xl mb-8">
                <span>
                    {{ el.description }}
                </span>
            </h4>
    
            <div class="flex gap-10 items-center text-center">
                <NuxtLink target="_blank" :to="el.link_project"
                    class="font-bold py-3 px-10 bg-[#346259] rounded-lg text-white"
                >
                    VISIT GITHUB
                    <Icon name="mdi:github" size="30" class="ml-2 pb-1" />
                </NuxtLink>
        
            </div>
        </div>

        <img class="rounded-lg w-[340px] h-[200px] sm:w-[360px] sm:h-[240px] md:w-[420px] 
            md:h-[280px] lg:w-[480px] lg:h-[320px] xl:w-[540px] xl:h-[360px] 2xl:w-[600px] 
            2xl:h-[400px] object-cover select-none pointer-events-none dark:border-white border-black"
            :src="`${el.image_name}`"
    />
    </div>
</template>
  
<script setup>
defineProps(["el"]);
</script>
  