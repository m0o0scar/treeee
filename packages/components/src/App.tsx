import { useState } from 'react';
import styled from 'styled-components';

import { ChatBubblesDemo } from './demos/chat/ChatBubbles';

const StyledList = styled.ul`
  a {
    cursor: pointer;
    text-decoration: none;
  }
`;

export default function App() {
  const [demo, setDemo] = useState<undefined | 'chat-bubbles'>();

  return (
    <main className="prose max-w-full p-4">
      <a
        className="cursor-pointer no-underline"
        onClick={() => setDemo(undefined)}
      >
        <h1>🛝 Demos</h1>
      </a>
      {!demo && (
        <StyledList>
          <li>
            <h2>💬 Chat</h2>
            <ul>
              <li>
                <a onClick={() => setDemo('chat-bubbles')}>
                  🫧 Chat Bubble Styles
                </a>
              </li>
            </ul>
          </li>
        </StyledList>
      )}

      {demo === 'chat-bubbles' && <ChatBubblesDemo />}
    </main>
  );
}
