import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile';
import { useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

interface ProfilePageProps {
    className?: string;
}

const reducers: ReducerList = {
    profile: profileReducer,
};

export const ProfilePage = ({ className }: ProfilePageProps) => {
    const dispatch = useAppDispatch();

    // useEffect(() => {
    //     dispatch(fetchProfileData());
    // }, [dispatch]);

    return (
        <DynamicModuleLoader
            removeAfterAnmount
            reducers={reducers}
        >
            <div className={classNames('', {}, [className])}>
                <ProfileCard />
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
