/* eslint-disable i18next/no-literal-string */
/* eslint-disable max-len */
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';
import { LoginModal } from 'features/authByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
        setIsAuthModal(false);
    }, [dispatch]);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                type="button"
                theme={ButtonTheme.ClEAR_INVERTED}
                className={cls.links}
                onClick={authData ? onLogout : onShowModal}
            >
                {authData ? `${t('Выйти')}` : `${t('Войти')}`}
            </Button>
            {!authData && (
                <LoginModal
                    isOpen={isAuthModal}
                    onClose={onCloseModal}
                />
            )}
        </div>
    );
};
