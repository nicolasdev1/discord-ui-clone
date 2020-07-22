import React, { useRef, useEffect } from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

import ChannelMessage, { Mention } from '../ChannelMessage';

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

        if (div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef]);

    const messages = [
        {
            key: String(Math.random()),
            author: 'Autor',
            date: '31/12/1999',
            content: 'Mensagem',
            mention: false,
            bot: false,
            botVerified: false,
        },

        {
            key: String(Math.random()),
            author: 'Autor',
            date: '31/12/1999',
            content: 'Mensagem',
            mention: false,
            bot: false,
            botVerified: false,
        },

        {
            key: String(Math.random()),
            author: 'Autor',
            date: '31/12/1999',
            content: 'Mensagem',
            mention: false,
            bot: false,
            botVerified: false,
        },

        {
            key: String(Math.random()),
            author: 'Autor',
            date: '31/12/1999',
            content: 'Mensagem',
            mention: false,
            bot: false,
            botVerified: false,
        },

        {
            key: String(Math.random()),
            author: 'Autor',
            date: '31/12/1999',
            content: 'Mensagem',
            mention: false,
            bot: false,
            botVerified: false,
        },

        {
            key: String(Math.random()),
            author: 'Autor',
            date: '31/12/1999',
            content: 'Mensagem',
            mention: false,
            bot: false,
            botVerified: false,
        },

        {
            key: String(Math.random()),
            author: 'Autor',
            date: '31/12/1999',
            content: 'Mensagem',
            mention: false,
            bot: false,
            botVerified: false,
        },

        {
            key: String(Math.random()),
            author: 'Autor',
            date: '31/12/1999',
            content: 'Mensagem',
            mention: false,
            bot: false,
            botVerified: false,
        },

        {
            key: String(Math.random()),
            author: 'Autor',
            date: '31/12/1999',
            content: 'Mensagem',
            mention: false,
            bot: false,
            botVerified: false,
        },

        {
            key: String(Math.random()),
            author: 'Autor',
            date: '31/12/1999',
            content: 'Mensagem',
            mention: false,
            bot: false,
            botVerified: false,
        },

        {
            key: String(Math.random()),
            author: 'Autor',
            date: '31/12/1999',
            content: 'Mensagem',
            mention: false,
            bot: false,
            botVerified: false,
        },

        {
            key: String(Math.random()),
            author: 'Autor',
            date: '31/12/1999',
            content: 'Mensagem',
            mention: false,
            bot: false,
            botVerified: false,
        },

        {
            key: String(Math.random()),
            author: 'Autor',
            date: '31/12/1999',
            content: 'Mensagem',
            mention: false,
            bot: false,
            botVerified: false,
        },

        {
            key: String(Math.random()),
            author: 'Alexandre Junior',
            date: '04/07/2020',
            content: 'Esta é uma mensagem',
            mention: false,
            bot: false,
            botVerified: true,
        },

        {
            key: String(Math.random()),
            author: 'Bruno',
            date: '04/07/2020',
            content: 'Esta é uma mensagem',
            mention: false,
            bot: true,
            botVerified: false,
        },
        
        {
            key: String(Math.random()),
            author: 'Nícolas Carvalho',
            date: '04/07/2020',
            content: 'Meu aniversário é dia 14/08/2020',
            mention: false,
            bot: false,
            botVerified: false,
        },

        {
            key: String(Math.random()),
            author: 'Morane',
            date: '04/07/2020',
            mention: true,
            content:
                <>
                    Vai ter festa, <Mention>@Nícolas Carvalho</Mention>?
                </>
            ,
            bot: false,
            botVerified: false,
        },

        {
            key: String(Math.random()),
            author: 'Nícolas Carvalho',
            date: '04/07/2020',
            content: 'Vai sim, mano!',
            mention: false,
            bot: false,
            botVerified: false,
        },
    ]

    return (
        <Container>
            <Messages ref={messagesRef}>
                {messages.map((message) => {
                    return (
                        <ChannelMessage
                            key={message.key}
                            author={message.author}
                            date={message.date}
                            content={message.content}
                            hasMention={message.mention}
                            isBot={message.bot}
                            isBotVerified={message.botVerified}
                        />
                    );
                })}
            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversar em #chat-livre" />
                <InputIcon />
            </InputWrapper>
        </Container>
    );
}

export default ChannelData;
