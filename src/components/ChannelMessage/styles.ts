import styled from 'styled-components';

import { Check } from 'styled-icons/boxicons-regular';

export const Container = styled.div`
    display: flex;
    align-items: center;

    padding: 4px 16px;
    margin-right: 4px;

    background-color: transparent;

    &.mention {
        background-color: var(--mention-message);

        border-left: 2px solid var(--mention-detail);
        padding-left: 14px;

        &:hover {
            background-color: var(--mention-hover);
        }
    }

    & + div {
        margin-top: 13px;
    }

    &:hover {
        background: var(--secondary);
    }
`;

export const Avatar = styled.div`
    width: 40px;
    height: 40px;

    position: relative;

    min-height: 40px;

    background-color: var(--gray);

    border-radius: 20px;

    flex-shrink: 0;

    &.bot {
        background-color: var(--mention-detail);
    }
`;

export const Message = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin-left: 17px;

    min-height: 40px;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;

    > strong {
        color: var(--white);

        font-size: 16px;

        &:hover {
            cursor: pointer;

            text-decoration: underline;
        }
    }

    > span {
        display: flex;
        align-items: center;

        margin-left: 6px;

        background-color: var(--logo);
        color: var(--white);

        border-radius: 4px;
        padding: 3px 5px;

        text-transform: uppercase;

        font-size: 13px;
    }

    > time {
        margin-left: 6px;

        color: var(--gray);

        font-size: 13px;

        cursor: default;
    }
`;

export const Verified = styled(Check)`
    width: 15px;
    height: 15px;

    margin-right: 2px;
`;

export const Content = styled.div`
    text-align: left;

    font-size: 15px;

    color: rgba(255, 255, 255, 0.8);
`;

export const Mention = styled.span`
    color: var(--link);

    &:hover {
        cursor: pointer;

        text-decoration: underline;
    }
`;
