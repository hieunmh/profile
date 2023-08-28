<template>
    <form @submit.prevent="" 
        class="bg-white dark:bg-black rounded-3xl sm:rounded-full overflow-hidden border 
        border-black dark:border-white p-2 mt-10 mb-24 sm:flex sm:justify-between w-full"
    >
        <input type="email" placeholder="Enter your e-mail here"
            class="ml-4 focus:outline-none text-black dark:text-white dark:bg-black flex-grow my-3"
        />

        <button type="submit" 
            class="bg-black px-4 py-2 border border-black hover:bg-white hover:text-black 
            dark:bg-white dark:border-white dark:hover:bg-black dark:hover:text-white dark:text-black
            rounded-full  w-full sm:w-[20%] sm:ml-4 text-white"
        >
            <span>Contact</span>
        </button>
    </form>
</template>

<script setup>

</script>