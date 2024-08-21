import classNames from 'classnames';
import { FC, ReactNode } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { ChatMessage, ChatMessageType } from './types';

export interface ChatBubbleProps {
  className?: string;
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
        <Markdown className="" remarkPlugins={[remarkGfm]}>
          {message.content}
        </Markdown>
      );

    case 'image':
      return <img className="rounded-lg m-0" src={message.url} />;

    case 'file':
      // TODO render file icon based on mimeType
      return (
        <a className="no-underline" target="_blank" href={message.url}>
          <div className="alert justify-start px-4 py-2">
            📄 {message.name || message.url}
          </div>
        </a>
      );

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

  return (
    <div className="flex flex-col gap-2">
      {message.map((m, i) => (
        <ChatBubbleContentRenderer key={i} message={m} />
      ))}
    </div>
  );
};

export const ChatBubble: FC<ChatBubbleProps> = ({
  className,
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
          <div className="w-10 rounded-full border">
            <span className="text-xl">{avatar}</span>
          </div>
        </div>
      )}

      {/* header */}
      <div className="chat-header">{header}</div>

      {/* message content */}
      <div
        className={classNames(
          'chat-bubble [&::before]:hidden min-h-0 text-base-content',
          placement === 'start' ? 'bg-transparent px-0' : 'bg-base-200'
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
