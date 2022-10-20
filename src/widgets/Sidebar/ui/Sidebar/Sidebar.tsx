import { t } from 'i18next';
import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToogle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            className={
                classNames(
                    cls.sidebar,
                    { [cls.collapsed]: collapsed },
                    [className],
                )
            }
        >
            <button
                type="button"
                onClick={onToogle}
            >
                {t('toggle')}
            </button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};
