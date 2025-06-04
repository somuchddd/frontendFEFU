<template>
    <header class = "header">
        <div class="header__container _container">
            <div class="header__block-one">
                <img class="header__logo" src="\img\header_logo.svg" alt="Логотип">
                <nav class="header__menu">
                    <a href="#" class="header__menu-item">Реализованные проекты</a>
                    <a href="#" class="header__menu-item">Новости</a>
                    <a href="#" class="header__menu-item">Контакты</a>
                </nav>
            </div>
            <div class="header__block-two">
                <div class="header__phone">
                    <img class="header__phone-icon" src="\img\telephone.svg" alt="Телефон">
                    <a href="tel:+79009009090" class="header__phone-number">+7 (900) 900-90-90</a>
                </div>
                <Dialog v-model:open="dialogOpened" />
                <button class="header__button" @click='dialogOpened = true'>
                    <span class="header__button-text">Оставить заявку</span>
                </button>
                <Drawer class="header__button-burger"/>
            </div>
        </div>
    </header>
</template>

<script setup>
    import Drawer from './Drawer.vue'
    const dialogOpened = ref(false)
</script>

<style scoped lang="scss">
    .header{
        padding: 24px 0px;
    }

    .header__container{
        display: flex;
        flex-direction: row;
    }

    .header__block-one{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 80px;
        width: 50%;
        font-family: var(--main-font)
    }
    .header__menu{
        display: flex;
        gap: 24px;
        font-size: 16px;
        color: #666666;
        flex-wrap: wrap;
    }

    .header__menu-item{
        cursor: pointer;
    }

    .header__block-two{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        width: 50%;
        gap: 24px;
        font-family: var(--font)
    }

    .header__button{
        background-color: #029F59;
        color: #ffffff;
        border-radius: 10px;
        padding: 16px 40px;
        border: 0px;
        font-family: inherit;
        cursor: pointer;
    }

    .header__phone{
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 14px;
        line-height: 120%;
        @media (max-width: 520px){
            display: none;
        }
    }

    .header__phone-number{
        color: #254741;
        cursor: pointer;
    }

    .header__phone-icon{
        width: 16px;
    }
    
    @media (max-width: 955px){
        .header__menu{
            display: none;
        }
    }

    @media (max-width: 824px){
        .header__button-burger{
            display: block;
        }

        .header__button{
            display: none;
        }
    }

</style>
