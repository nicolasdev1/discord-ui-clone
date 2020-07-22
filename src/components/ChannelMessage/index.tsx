import React from 'react';

import { Container, Avatar, Message, Header, Verified, Content } from './styles';
export { Mention } from './styles';

export interface Props {
  author: string;
  date: string;
  content: string | React.ReactElement | React.ReactNode;
  hasMention?: boolean;
  isBot?: boolean;
  isBotVerified?: boolean;
}

const ChannelMessage: React.FC<Props> = ({
  author,
  date,
  content,
  hasMention,
  isBot,
  isBotVerified
}) => {
  return (
      <Container className={hasMention ? 'mention' : ''}>
          <Avatar className={isBot || isBotVerified ? 'bot' : ''} />
          <Message>
            <Header>
              <strong>{author}</strong>

              {isBot && <span>Bot</span>}
              {isBotVerified && <span><Verified />Bot</span>}

              <time>{date}</time>
            </Header>

            <Content>{content}</Content>
          </Message>
      </Container>
  );
}

export default ChannelMessage;
