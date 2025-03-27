<template>
    <div class="card">
        <slot name="content"></slot>
    </div>
</template>

<style lang="scss">
    @use "@/assets/scss/mixins.scss" as *;
    .card {
        @include shared-style(#66CDAA, 10px 40px, 3px solid #000000, 28px, var(--main-font));
    }
</style>

