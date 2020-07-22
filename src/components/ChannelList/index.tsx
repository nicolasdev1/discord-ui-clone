import React from 'react';

import { Container, Category, AddCategoryIcon } from './styles';

import ChannelButton from '../ChannelButton';

const ChannelList: React.FC = () => {
    const channels = [
        {
            key: String(Math.random()),
            name: 'chat-livre',
            select: true,
        },

        {
            key: String(Math.random()),
            name: 'faculdade',
            select: false,
        },

        {
            key: String(Math.random()),
            name: 'valorant',
            select: false,
        },

        {
            key: String(Math.random()),
            name: 'r6',
            select: false,
        },

        {
            key: String(Math.random()),
            name: 'csgo',
            select: false,
        },
        
    ]

    return (
        <Container>
            <Category>
                <span>Canais de texto</span>

                <AddCategoryIcon />
            </Category>

            {channels.map((channel) => {
                return (
                    <ChannelButton
                        key={channel.key}
                        channelName={channel.name}
                        selected={channel.select}
                    />
                );
            })}
        </Container>
    );
}

export default ChannelList;
