import classNames from 'classnames';
import { FC, ReactNode } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styled from 'styled-components';

import { ChatMessage, ChatMessageType } from './types';

const StyledMarkdown = styled(Markdown)`
  ol {
    list-style: decimal;
  }
  ul {
    list-style: disc;
  }
  img {
    margin: 0;
  }
`;

export interface ChatBubbleProps {
  className?: string;
  bubbleClassName?: string;
  bubbleColor?:
    | 'chat-bubble-primary'
    | 'chat-bubble-secondary'
    | 'chat-bubble-accent'
    | 'chat-bubble-info'
    | 'chat-bubble-success'
    | 'chat-bubble-warning'
    | 'chat-bubble-error';
  placement?: 'start' | 'end';
  avatar?: string;
  header?: ReactNode;
  footer?: ReactNode;
  message?: ChatMessage;
  children?: ReactNode;
}

const ChatBubbleContentRenderer: FC<{ message: ChatMessageType }> = ({
  message,
}) => {
  switch (message.type) {
    case 'text':
      return <div>{message.content}</div>;

    case 'markdown':
      return (
        <StyledMarkdown remarkPlugins={[remarkGfm]}>
          {message.content}
        </StyledMarkdown>
      );

    case 'image':
      return <img className="rounded-lg m-0" src={message.content} />;

    default:
      return null;
  }
};

const ChatBubbleContent: FC<{ message?: ChatMessage }> = ({ message }) => {
  if (!message) {
    return null;
  }

  if (typeof message === 'string') {
    return message;
  }

  if (!Array.isArray(message)) {
    return <ChatBubbleContentRenderer message={message} />;
  }

  return message.map((m, i) => (
    <ChatBubbleContentRenderer key={i} message={m} />
  ));
};

export const ChatBubble: FC<ChatBubbleProps> = ({
  className,
  bubbleClassName,
  bubbleColor,
  placement = 'start',
  avatar,
  header,
  footer,
  message,
  children,
}) => {
  const isImageAvatar = avatar && avatar.match(/\.(png|jpe?g|gif|webp)$/i);

  return (
    <div
      className={classNames(
        'chat',
        {
          'chat-start': placement === 'start',
          'chat-end': placement === 'end',
          'gap-0': !avatar,
        },
        className
      )}
    >
      {/* avatar */}
      {avatar && isImageAvatar && (
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="avatar" className="m-0" src={avatar} />
          </div>
        </div>
      )}
      {avatar && !isImageAvatar && (
        <div className="chat-image avatar placeholder">
          <div
            className={classNames(
              'w-10 rounded-full',
              bubbleColor || 'bg-neutral text-neutral-content'
            )}
          >
            <span className="text-xl">{avatar}</span>
          </div>
        </div>
      )}

      {/* header */}
      <div className="chat-header">{header}</div>

      {/* message content */}
      <div
        className={classNames(
          'chat-bubble [&::before]:hidden min-h-0',
          bubbleColor,
          bubbleClassName
        )}
      >
        {message && <ChatBubbleContent message={message} />}
        {children}
      </div>

      {/* footer */}
      <div className="chat-footer opacity-50">{footer}</div>
    </div>
  );
};
