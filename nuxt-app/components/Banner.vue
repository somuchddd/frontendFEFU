<template>
    <div class="banner">
        <span>Баннер</span>
    </div>
</template>

<style scoped lang="scss">
    @use "@/assets/scss/mixins.scss" as *;
    .banner {
        @include shared-style(#EE82EE, 5px 5px, 2px solid #000000, 36px, var(--font));
        text-align: left;
        width: 100%;
    }
</style>
