import React from 'react';

import { Container, Avatar, Verified } from './styles';

export interface Props {
    nickname: string;
    isBot?: boolean;
    isBotVerified?: boolean;
}

const UserRow: React.FC<Props> = ({ nickname, isBot, isBotVerified }) => {
    return (
        <Container>
            <Avatar className={isBot || isBotVerified ? 'bot' : ''} />

            <strong>{nickname}</strong>

            {isBot && <span>Bot</span>}
            {isBotVerified && <span><Verified />Bot</span>}
        </Container>
    );
}

export default UserRow;
