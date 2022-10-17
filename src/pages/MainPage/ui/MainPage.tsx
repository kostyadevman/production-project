import React from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const {t} = useTranslation('main');
    return (
        <div>   
            {t ('Доброе утро')}
            {t ('Главная страница')}
        </div>
    );
};

export default MainPage;