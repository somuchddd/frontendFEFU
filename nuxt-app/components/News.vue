<template>
    <div class="news">
        <div class="news__header">
            <div class="news__header-title">
                Новости
            </div>
            <button class="news__header-button">
                Все новости
            </button>
        </div>
        <div class="news__cards">
            <NewsCard v-for="card in news" 
            :title='card.title'
            :text='card.text'
            :image='card.image'
            :date='card.date'/>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .news{
        padding-top: 80px;
        padding-bottom: 60px;
        &__header{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 32px;
            &-title{
                font-family: var(--font);
                font-size: 38px;
                font-weight: 700;
                line-height: 120%;
            }
            &-button{
                color: #029F59;
                border: #029F59 solid 1px;
                background-color: #ffffff;
                font-family: var(--font);
                font-size: 14px;
                font-weight: 600;
                border-radius: 10px;
                padding: 16px 24px;
            }
        }
    }

    .news__cards{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        overflow: auto;
        column-gap: 16px;
    }

    @media(max-width: 824px){
        .news{
            padding-top: 60;
        }
    }
</style>

<script setup>
    import NewsCard from './NewsCard.vue'
    import news1_1x from '../img/news1.jpg'
    import news1_2x from '../img/news1@2x.jpg'
    import news2_1x from '../img/news2.jpg'
    import news2_2x from '../img/news2@2x.jpg'
    import news3_1x from '../img/news3.jpg'
    import news3_2x from '../img/news3@2x.jpg'
    import news4_1x from '../img/news4.jpg'
    import news4_2x from '../img/news4@2x.jpg'

    const news = [
        {
            image:{
                x1: news1_1x,
                x2: news1_2x,
            },
            date: '20 авг 2021',
            title: 'Как сделать строительство дешевле?',
            text: 'Строительство дома можно сделать дешевле — выбрав проект...'
        },
        {
            image:{
                x1: news2_1x,
                x2: news2_2x,
            },
            date: '20 авг 2021',
            title: 'Почему Гуд Вилл строит лучшие дома?',
            text: 'Хотим обрадовать тех, кто планирует переезд из квартиры в дом...'
        },
        {
            image:{
                x1: news3_1x,
                x2: news3_2x,
            },
            date: '20 авг 2021',
            title: 'Преимущества и недостатки частного дома',
            text: 'Первое и главное: строим дом индивидуально для вас, по вашим...'
        },
        {
            image:{
                x1: news4_1x,
                x2: news4_2x,
            },
            date: '20 авг 2021',
            title: 'Из чего мы строим дома в ипотеку?',
            text: 'Самый популярный вопрос наших клиентов касается материалов, которы...'
        },
    ]
</script>