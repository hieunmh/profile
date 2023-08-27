<template>
    <li class="border-2 px-2 p-1 rounded-lg border-white dark:border-black list-none 
        dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white"
    >
        <NuxtLink :to="`/#${path}`">
            {{ name }}
        </NuxtLink>
    </li>   
</template>

<script setup>
defineProps(['name', 'path']);

</script>     