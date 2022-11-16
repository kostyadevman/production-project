import { profileReducer } from 'entities/Profile';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

interface ProfilePageProps {
    className?: string;
}

const reducers: ReducerList = {
    profile: profileReducer,
}

export const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation();
    return (
        <DynamicModuleLoader
            removeAfterAnmount
            reducers={reducers}
        >
            <div className={classNames('', {}, [className])}>
                {t('PROFILE_PAGE')}
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
