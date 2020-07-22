import styled from 'styled-components';

import { Mic, Headset, Settings } from 'styled-icons/material';

export const Container = styled.div`
    grid-area: UI;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 10px;

    background-color: var(--quaternary);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
`;

export const Avatar = styled.div`
    width: 32px;
    height: 32px;

    border-radius: 16px;

    cursor: pointer;

    background-color: var(--gray);
`;

export const UserData = styled.div`
    display: flex;
    flex-direction: column;

    margin-left: 8px;

    cursor: pointer;

    > strong {
        width: 84px;
        font-size: 14px;

        display: block;

        color: var(--white);

        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    > span {
        font-size: 13px;
        
        color: var(--gray);
    }
`;

export const Icons = styled.div`
    display: flex;
    align-items: center;

    > svg:not(:first-child) {
        margin-left: 9px;
    }
`;

export const MicIcon = styled(Mic)`
    width: 20px;
    height: 20px;

    color: var(--white);
    opacity: .7;
    cursor: pointer;

    transition: opacity .2s;

    &:hover {
        opacity: 1;
    }
`;

export const HeadphoneIcon = styled(Headset)`
width: 20px;
height: 20px;

color: var(--white);
opacity: .7;
cursor: pointer;

transition: opacity .2s;

&:hover {
    opacity: 1;
}
`;

export const SettingsIcon = styled(Settings)`
width: 20px;
height: 20px;

color: var(--white);
opacity: .7;
cursor: pointer;

transition: opacity .2s;

&:hover {
    opacity: 1;
}
`;
