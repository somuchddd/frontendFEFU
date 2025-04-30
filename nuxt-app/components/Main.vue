<template>
    <main class="main">
        <div class="main__container">
            <section class="slider">
                <div class="_container">
                    <Slider /> 
                </div>
            </section>
            <section class="block__info">
                <div class="_container">
                    <BlockInfo />
                </div>
            </section>
            <section class="projects">
                <div class="_container">
                    <Projects />
                </div>
            </section>
            <section class="news">
                <div class="_container">
                    <News />
                </div>
            </section>
        </div>
    </main>
</template>

<script>
    import BlockInfo from './BlockInfo.vue'
    import Slider from './Slider.vue'
    import Projects from './Projects.vue'
    import News from './News.vue'
</script>

<style>
    .main{
        flex: 1 1 auto;
    }

    .main__container{
        display: flex;
        flex-direction: column;
    }

    .projects{
        background-color: #F5F7F3;
    }
</style>

