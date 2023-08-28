<template>
    <section v-if="true" id="projects">
        <Container>
            <div class="my-5 py-20">
                <h2 class="text-center text-3xl font-black border-b-2 
                    border-black dark:border-white w-min mx-auto p-2"
                >
                    Projects
                </h2>
        
                <div class="my-10 sm:px-20 relative">
                    <div class="block  rounded-xl -left-0 absolute w-full h-full bg-transparent bg-cover-color">
                    </div>
        
                    <div class="carousel overflow-hidden relative">
                        <div class="carousel-inner flex duration-300 transition-transform ease-in-out select-none cursor-grab"
                            @mousedown="startDrag" @mousemove="handleDrag"
                            @mouseup="endDrag" @mouseleave="endDrag"
                            @touchstart="handleTouchStart" @touchmove="handleTouchMove"
                            @touchend="handleTouchEnd" @touchcancel="handleTouchEnd"
                        >
                            <div v-for="(el, index) in data.list" :key="index" class="carousel-item flex-0 flex-shrink-0 w-full" >
                                <ProjectCard :el="el" />
                            </div>
                        </div>
                    </div>
                </div>
        
                <div class="flex items-center justify-center gap-10">
                    <button @click="prev" class="carousel-prev rounded-full dark:hover:bg-white dark:hover:text-black
                        hover:bg-black hover:text-white" 
                    >
                        <Icon name="material-symbols:chevron-left-rounded" size="30" />
                    </button>
        
                    <div class="flex items-center justify-center gap-2">
                        <div v-for="(el, index) in data.list"
                            :key="index"
                            :class="`w-2 h-2 dark:bg-white bg-black ${
                            index == data.current ? 'opacity-100' : 'opacity-50 dark:opacity-10'
                            } rounded-full`"
                        >
                        </div>
                    </div>
        
                    <button @click="next" class="carousel-next rounded-full dark:hover:bg-white dark:hover:text-black
                    hover:bg-black hover:text-white"
                    >
                        <Icon name="material-symbols:chevron-right-rounded" size="30" />


                    </button>
                </div>
            </div>
        </Container>
    </section>
  </template>
  
<script setup>
import axios from "axios";

  
const data = reactive({
    list: [],
    current: 0,
    timer: null,
    drag: {
        startX: 0,
        currentX: 0,
        isDragging: false,
    },
});


data.list = [
    {
        "name": "Software Engineer Project",
        "description": "Software Engineer Project",
        "link_project": "https://github.com/hieuunm/SE",
        "link_github": "https://github.com/hieuunm/SE",
        "image_name": "/project/SE.png"
    },
    {
        "name": "Bomberman Game",
        "description": "OOP Project",
        "link_project": "https://github.com/hieuunm/OOP-Bomberman",
        "link_github": "https://github.com/hieuunm/OOP-Bomberman",
        "image_name": "/project/Bomberman.png"
    },
    {
        "name": "Snake",
        "description": "Snake game in C++",
        "link_project": "https://github.com/hieuunm/baitaplon",
        "link_github": "https://github.com/hieuunm/baitaplon",
        "image_name": "/project/snake.jpg"
    },
    {
        "name": "Portfolio V2",
        "description": "Portfolio code with NuxtJS, deploy in Vercel",
        "link_project": "https://github.com/hieuunm/",
        "link_github": "https://github.com/hieuunm/",
        "image_name": "/project/portfolio.png"
    },
];
  
let touchStartX = 0;
let touchMoveX = 0;
  
const handleTouchStart = (event) => {
    touchStartX = event.touches[0].clientX;
};
  
const handleTouchMove = (event) => {
    touchMoveX = event.touches[0].clientX;
};
  
const handleTouchEnd = () => {
    const minSwipeDistance = 20;
    const swipeDistance = touchStartX - touchMoveX;
  
    if (Math.abs(swipeDistance) >= minSwipeDistance) {
        if (swipeDistance > 0) {
            next();
        } else {
            prev();
        }
    }
};
  
const prev = () => {
    if (data.current > 0) {
        data.current--;
        moveCarousel();
        stopAutoSwipe();
        startAutoSwipe();
    }
    else if (data.current <= 0) {
        data.current = data.list.length - 1;
        moveCarousel();
        stopAutoSwipe();
        startAutoSwipe();
    }
};
  
const next = () => {
    const totalItems = data.list.length;
    if (data.current < totalItems - 1) {
        data.current++;
        moveCarousel();
        stopAutoSwipe();
        startAutoSwipe();
    }
    else if (data.current >= totalItems - 1) {
        data.current = 0;
        moveCarousel();
        stopAutoSwipe();
        startAutoSwipe();
    }
};
  
const moveCarousel = () => {
    const carouselInner = document.querySelector(".carousel-inner");

    if (carouselInner) {
       carouselInner.style.transform = `translateX(-${data.current * 100}%)`;
    }
};
  
const startAutoSwipe = () => {
    data.timer = setInterval(() => {
        const totalItems = data.list.length;
        if (data.current < totalItems - 1) {
            data.current++;
        } else {
            data.current = 0;
        }
        moveCarousel();
    }, 3000);
};
  
const stopAutoSwipe = () => {
    clearInterval(data.timer);
};
  
const startDrag = (event) => {
    data.drag.startX = event.clientX;
    data.drag.currentX = data.drag.startX;
    data.drag.isDragging = true;
    stopAutoSwipe();
};
  
const handleDrag = (event) => {
    if (data.drag.isDragging) {
      data.drag.currentX = event.clientX;
    }
};
  
const endDrag = () => {
    if (data.drag.isDragging) {
        data.drag.isDragging = false;
        const dragDistance = data.drag.currentX - data.drag.startX;
        const threshold = window.innerWidth / 25; 
        const totalItems = data.list.length;

        if (dragDistance > threshold && data.current > 0) {
            data.current--;
        } else if (dragDistance < -threshold && data.current < totalItems - 1) {
            data.current++;
    }

    moveCarousel();
        startAutoSwipe();
    }
};
  
onUnmounted(() => {
    stopAutoSwipe();
});
  
</script>
  
<style scoped>
@media (min-width: 640px) {
.bg-cover-color {
    background: linear-gradient(
    90deg,
    rgba(52, 98, 89, 0.65) 0%,
    rgba(52, 98, 89, 0.25) 20%,
    rgba(52, 98, 89, 0) 100%
    );
}
}
</style>
  