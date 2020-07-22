import React from 'react';

import { Container, Role } from './styles';

import UserRow from '../UserRow';

const UserList: React.FC = () => {
    const online = [
        {
            key: String(Math.random()),
            name: 'Nícolas Carvalho',
            bot: false,
            botVerified: false,
        },

        {
            key: String(Math.random()),
            name: 'Membro',
            bot: false,
            botVerified: false,
        },

        {
            key: String(Math.random()),
            name: 'Membro',
            bot: false,
            botVerified: false,
        },

        {
            key: String(Math.random()),
            name: 'Membro',
            bot: false,
            botVerified: false,
        },

        {
            key: String(Math.random()),
            name: 'Membro',
            bot: false,
            botVerified: false,
        },

        {
            key: String(Math.random()),
            name: 'Membro',
            bot: false,
            botVerified: false,
        },

        {
            key: String(Math.random()),
            name: 'Membro',
            bot: false,
            botVerified: false,
        },
    ]

    const offline = [
        {
            key: String(Math.random()),
            name: 'Alexandre Junior',
            bot: false,
            botVerified: true,
        },

        {
            key: String(Math.random()),
            name: 'Bruno',
            bot: true,
            botVerified: false,
        },

        {
            key: String(Math.random()),
            name: 'Felipe Antonio',
            bot: false,
            botVerified: false,
        },

        {
            key: String(Math.random()),
            name: 'Matheus Kaique',
            bot: false,
            botVerified: false,
        },

        {
            key: String(Math.random()),
            name: 'Morane',
            bot: false,
            botVerified: false,
        },

        {
            key: String(Math.random()),
            name: 'Marcelo Rodrigues',
            bot: false,
            botVerified: false,
        },

        {
            key: String(Math.random()),
            name: 'Membro',
            bot: false,
            botVerified: false,
        },

        {
            key: String(Math.random()),
            name: 'Membro',
            bot: false,
            botVerified: false,
        },

        {
            key: String(Math.random()),
            name: 'Membro',
            bot: false,
            botVerified: false,
        },

        {
            key: String(Math.random()),
            name: 'Membro',
            bot: false,
            botVerified: false,
        },

        {
            key: String(Math.random()),
            name: 'Membro',
            bot: false,
            botVerified: false,
        },

        {
            key: String(Math.random()),
            name: 'Membro',
            bot: false,
            botVerified: false,
        },
    ]

    return (
        <Container>
            <Role>Disponivel—1</Role>

            {online.map((on) => {
                return (
                    <UserRow
                        key={on.key}
                        nickname={on.name}
                        isBotVerified={on.botVerified}
                        isBot={on.bot}
                    />
                );
            })}

            <Role>Offline—5</Role>

            {offline.map((off) => {
                return (
                    <UserRow
                        key={off.key}
                        nickname={off.name}
                        isBotVerified={off.botVerified}
                        isBot={off.bot}
                    />
                );
            })}

        </Container>
    );
}

export default UserList;
