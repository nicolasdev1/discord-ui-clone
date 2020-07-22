import React from 'react';

import { Button } from './styles';

import logo from '../../assets/logo.svg';

export interface Props {
    isHover?: boolean;
    isHome?: boolean;
    hasNotifications?: boolean;
    mentions?: number;
}

const ServerButton: React.FC<Props> = ({
    isHover,
    isHome,
    hasNotifications,
    mentions
}) => {
    return (
        <Button
            isHome={isHome}
            hasNotifications={hasNotifications}
            mentions={mentions}
            className={isHover ? 'active' : ''}
        >
            {isHome && <img src={logo} alt="Discord" />}
        </Button>
    )
};

export default ServerButton;
