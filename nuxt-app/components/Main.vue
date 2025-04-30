<template>
    <main class="main">
        <div class="main__container _container">
            <Slider />  
            <BlockInfo />
        </div>
    </main>
</template>

<script>
    import BlockInfo from './BlockInfo.vue';
    import Slider from './Slider.vue'
</script>

<style>
    .main{
        flex: 1 1 auto;
    }

    .main__container{
        display: flex;
        flex-direction: column;
    }
</style>

