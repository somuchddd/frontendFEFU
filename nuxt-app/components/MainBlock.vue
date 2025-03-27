<template>
    <main>
        <SideBlock>
            <template #content>
                <span>Заголовок списка:</span>
                <ul>
                    <li>Опция 1</li>
                    <li>Опция 2</li>
                    <li>Опция 3</li>
                </ul>
            </template>
        </SideBlock>

        <div class="main_block">
            <Banner />
            <h1>Заголовок основного блока</h1>
            <img src="/img/minion.jpg" alt="минён">
            <span class="greeting">{{greetingText}}</span>
            <button @click="changeGreeting">Поменять приветствие</button>
            <div class="card_block">
                <Card>
                    <template #content>
                        <div>Здесь</div>
                    </template>
                </Card>
                <Card>
                    <template #content>
                        <div>И здесь</div>
                    </template>
                </Card>
            </div>
        </div>

        <SideBlock>
            <template #content>
                <span>Наполнение третьего блока</span>
            </template>
        </SideBlock>
    </main>
</template>

<script setup>
    const strings = ["Hello, world!", "Hello, FEFU!"];
    const currentIndex = ref(0);
    const greetingText = ref(strings[currentIndex.value]);

    const changeGreeting = () => {
    currentIndex.value = (currentIndex.value + 1) % strings.length;
    greetingText.value = strings[currentIndex.value];
    };
</script>
    
<style scoped lang="scss">
    main{
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    gap: 10px;
    margin: 10px 0px;
    }

    h1{
        font-size: 44px;
    }

    .main_block{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
        background-color: #F0E68C;
        border: 1px solid #000000;
        padding: 40px 20px;
        font-family: var(--main-font);
    }

    .main_block img{
        max-width: 300px;
    }

    button{
        font-size: 18px;
        padding: 7px 10px;
    }

    .card_block{
        display: flex;
        justify-content: space-around;
        width: 100%;
    }
</style>