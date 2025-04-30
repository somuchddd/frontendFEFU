<template>
    <footer class="footer">
        <div class="footer__container _container">
            <div class="footer__content">
                <div class="footer__logo">
                    <img src="\img\footer_logo.svg" alt="" class="footer__logo-icon">
                </div>
                <nav class="footer__nav">
                    <a href="#" class="footer__nav-item">Реализованные проекты</a>
                    <a href="#" class="footer__nav-item">Новости</a>
                    <a href="#" class="footer__nav-item">Контакты</a>
                </nav>
                <div class="footer__contacts">
                    <div class="footer__phone">
                        <img class="footer__phone-icon" src="\img\telephone.svg" alt="Телефон">
                        <a href="tel:+79009009090" class="footer__phone-number">+7 (900) 900-90-90</a>
                    </div>
                    <div class="footer__email">
                        <img class="footer__email-icon" src="\img\email.svg" alt="Почта">
                        <a href="mailto:info@gmail.com">info@gmail.com</a>
                    </div>
                    <div class="footer__address">
                        <img class="footer__address-icon" src="\img\address.svg" alt="Адрес">
                        <address>г. Владивосток <br> ул. Выселковая 49, стр. 3</address>
                    </div>
                </div>
                <button class="footer__button">Оставить заявку</button>
            </div>
            <div class="footer__rights">
                <a class="footer__rights-item" href="#">© Загдом, 2021</a>
                <a class="footer__rights-item" href="#">Политика конфиденциальности</a>
                <a class="footer__rights-item" href="#">Пользовательское соглашение</a>
            </div>
        </div>
    </footer>
</template>

<style>
    .footer{
        background-color: #254741;
        padding-bottom: 33px;
        padding-top: 37px;
    }

    .footer__container{
        display: flex;
        flex-direction: column;
        gap: 32px;
        
    }

    .footer__content{
        display: flex;
        flex-direction: row;
        color: #ffffff;
        align-items: flex-start;
        flex-wrap: wrap;
    }

    .footer__nav{
        display: flex;
        flex-direction: column;
        font-family: var(--main-font);
        gap: 24px;
        font-size: 16px;
        margin-right: clamp(20px, 6vw, 122px);
        margin-left: clamp(20px, 8vw, 154px);
        padding-top: 12px;
        align-items: flex-start;
    }

    .footer__contacts{
        display: flex;
        flex-direction: column;
        font-family: var(--font);
        gap: 24px;
        font-size: 14px;
        font-weight: 400;
        padding-top: 11px;
        margin-right: 45px;
    }

    .footer__contacts div{
        display: flex;
        line-height: 120%;
        gap: 8px;
        align-items: flex-start;
    }

    .footer__button{
        background-color: #029F59;
        color: #ffffff;
        border-radius: 10px;
        padding: 16px 40px;
        border: 0px;
        font-family: var(--font);
        cursor: pointer;
        margin-left: auto;
        @media (max-width: 1032px){
            margin-left: 0px;
            margin-top: 20px;
        }
    }

    .footer__rights{
        font-family: var(--main-font);
        font-size: 14px;
        opacity: 0.6;
        color: #ffffff;
        align-items: flex-start;
    }

    .footer__rights-item, .footer__contacts a, .footer__nav a{
        cursor: pointer;
    }
    
    .footer__rights-item:nth-child(1) {
        margin-right: clamp(20px, 11vw, 215px);
    }

    .footer__rights-item:nth-child(2) {
        margin-right: clamp(15px, 5vw, 99px);
    }
    
    @media (max-width: 824px){
        .footer__content{
            flex-direction: column;
            gap: 40px;
        }

        .footer__container{
            gap: 40px;
        }

        .footer__nav{
            margin-right: 0;
            margin-left: 0;
            padding-top: 0px;
        }

        .footer__rights{
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        .footer__button{
            margin-top: 0px;
        }

        .footer__contacts{
            margin-right: 0;
            padding-top: 0;
        }

        .footer__rights-item:nth-child(1), .footer__rights-item:nth-child(2){
            margin-right: 0px;
        }
    }
</style>