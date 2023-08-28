<template>
    <div class="flex items-center gap-5 cursor-pointer w-full h-full py-5">
        <div class="w-full relative">
            <div>
                <h4 class="text-xl font-bold text-center">
                    <Icon :name="el.icon" size="70" color="" class="dark:fill-white mr-5 ml-1 p-3" />
                    <span class="">{{ el.name }}</span>
                </h4>
            </div>

            <div class="absolute top-0 rounded-lg hover:opacity-80 bg-gray-300 w-full h-full z-10 opacity-0 text-gray-950">
                <div class="flex justify-center items-center h-full font-bold text-gray-950 text-3xl">
                    {{ el.percent }}%
                </div>
            </div>
        </div>

        
    </div>
</template>
  
<script setup>
defineProps(["el"]);
</script>

  
  