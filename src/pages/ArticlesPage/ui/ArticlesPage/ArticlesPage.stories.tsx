import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleView } from 'entities/Article';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import ArticlesPage from './ArticlesPage';

export default {
    title: 'pages/ArticlesPage/ArticlesPage',
    component: ArticlesPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = (args) => <ArticlesPage {...args} />;

export const Small = Template.bind({});
Small.args = {};
Small.decorators = [StoreDecorator({
    articlesPage: {
        view: ArticleView.SMALL,
    },
})];

export const Big = Template.bind({});
Big.args = {};
Big.decorators = [StoreDecorator({
    articlesPage: {
        view: ArticleView.BIG,
    },
})];
