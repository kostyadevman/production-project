import { ComponentMeta, ComponentStory } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { NotificationList } from './NotificationList';

export default {
    title: 'entities/Notification/NotificationList',
    component: NotificationList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [withMock],
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
};

Normal.decorators = [
    StoreDecorator({}),
];

Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: [
                {
                    id: '1',
                    title: 'Notification title 1',
                    description: 'Notification description 1',
                },
                {
                    id: '2',
                    title: 'Notification title 2',
                    description: 'notification description 2',
                },
                {
                    id: '3',
                    title: 'Notification title 3',
                    description: 'Notification description 3',
                },
            ],
        },
    ],
};
