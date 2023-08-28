<template>
    <div class="my-10">
        <Tag :text="el.tag" />
    
        <div class="w-full grid grid-cols-2 gap-4">
            <TagItem v-for="(el, ind) in el.skills" :key="ind" :el="el" />
        </div>
    </div>
</template>
  
<script setup>
defineProps(["el"]);
</script>

  