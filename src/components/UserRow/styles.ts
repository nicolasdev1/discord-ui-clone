import styled from 'styled-components';

import { Check } from 'styled-icons/boxicons-regular';

export const Container = styled.div`
    display: flex;
    align-items: center;

    margin-top: 5px;
    padding: 5px;

    cursor: pointer;

    background-color: transparent;
    border-radius: 4px;

    transition: background .2s;

    &:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }

    > strong {
        margin-left: 13px;

        font-weight: 500;

        color: var(--white);
        opacity: .7;

        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    > span {
        display: flex;
        align-items: center;

        margin-left: 9px;

        background-color: var(--logo);
        color: var(--white);

        border-radius: 4px;
        padding: 3px 5px;

        text-transform: uppercase;

        font-size: 13px;
    }
`;

export const Avatar = styled.div`
    flex-shrink: 0;

    width: 32px;
    height: 32px;

    border-radius: 16px;
    background-color: var(--primary);

    &.bot {
        background-color: var(--mention-detail);
    }
`;

export const Verified = styled(Check)`
    width: 15px;
    height: 15px;

    margin-right: 2px;
`;
