<template>
    <section id="home">
        <Container>
            <div class="mb-5 pt-24 p-5 relative">
            <div class="mx-auto text-center py-12">
                <h1 class="font-['SugarpunchDemo']">
                    <span class="block text-xl sm:text-2xl">HI, I'M</span>
                    <div class="my-5 sm:my-0">
                        <span class="block text-4xl sm:text-7xl my-2 sm:my-5">
                            Nguyen Minh
                        </span>
                        
                        <span class="block text-4xl sm:text-7xl my-2 sm:my-5">
                            Hieu
                        </span>
                    </div>
                </h1>
    
                <h2 class="text-base sm:text-2xl mb-16 sm:mb-0">
                    <span>Student from UET-VNU</span>
                </h2>
    
                <div class="w-min mx-auto my-7">
                    <NuxtLink class="font-semibold border-2 px-8 p-2 rounded invisible lg:visible text-black 
                        bg-white border-white hover:bg-black hover:text-white mix-blend-difference"
                        to="/#contact"
                    >
                        Contact
                    </NuxtLink>
                </div>
    
                <SocialMedia />
    
                <div class="mx-auto mt-14 hidden sm:block">
                    <div class="mb-5">
                        <Icon name="ic:outline-mouse" size="25" />
                    </div>
        
                    <div class="w-full">
                        <NuxtLink to="/#contact">
                            <Icon name="ic:round-keyboard-double-arrow-down" size="25" class="animate-bounce" />
                        </NuxtLink>
                        <p class="mt-3">Click here to scroll down</p>
                    </div>
                </div>
            </div>
    
            <img width="600" src="/icons/bg-cover-1.svg" 
                class="relative sm:absolute scale-150 mt-32 sm:mt-0 sm:scale-100 
                top-10 -left-40 sm:top-[12%] sm:-left-[22%] mix-blend-difference"              
            />
    
            <img width="150" src="/icons/bg-cover-2.svg"
                class="hidden sm:block sm:absolute top-[55%] left-[5%]"                
            />
    
            <img width="500" src="/icons/bg-cover-3.svg" 
                class="relative sm:absolute scale-150 sm:scale-100 -right-48 
                sm:top-[12%] sm:-right-[12%] mix-blend-difference"
            />
            </div>
        </Container>
    </section>
</template>
  
<script setup>

</script>
