<template>
    <div class="flex justify-center  text-black font-bold text-xl mix-blend-difference">
        <div class="bg-white flex items-center px-5 py-2 rounded-lg">
            <h3>
                <span>{{ text }}</span>
            </h3>
        </div>

    </div>
</template>

<script setup>
defineProps(["text"]);
</script>
  
  