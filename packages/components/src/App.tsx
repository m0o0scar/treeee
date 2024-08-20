import { ChatBubble } from './components/ChatBubble';

export default function App() {
  return (
    <main className="prose-sm max-w-full p-4">
      <h2>Chat Bubble</h2>

      {/* different placement */}
      <div className="divider">Placement</div>
      <ChatBubble message="Hello" placement="end" />
      <ChatBubble message="Hi, I'm a chat bubble" />

      {/* avatar */}
      <div className="divider">Avatar</div>
      <ChatBubble message="I'm a chat bubble with text avatar" avatar="T" />
      <ChatBubble message="I'm a chat bubble with emoji avatar" avatar="🌳" />
      <ChatBubble
        message="And I'm a chat bubble with image avatar"
        avatar="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
      />

      {/* header and footer */}
      <div className="divider">Header & Footer</div>
      <ChatBubble
        message="I also support header and footer"
        avatar="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
        header={
          <>
            This is header <span className="opacity-50">here</span>
          </>
        }
        footer={
          <>
            Hi, I'm <span className="opacity-50">footer 🦶</span>
          </>
        }
      />

      {/* bubble color */}
      <div className="divider">Bubble Color</div>
      <ChatBubble
        message="Chat bubble with different color"
        bubbleColor="chat-bubble-primary"
        avatar="🐼"
      />
      <ChatBubble
        message="Chat bubble with different color"
        bubbleColor="chat-bubble-secondary"
        avatar="🐻‍❄️"
      />
      <ChatBubble
        message="Chat bubble with different color"
        bubbleColor="chat-bubble-accent"
        avatar="🐨"
      />
      <ChatBubble
        message="Chat bubble with different color"
        bubbleColor="chat-bubble-info"
        avatar="🐻"
      />
      <ChatBubble
        message="Chat bubble with different color"
        bubbleColor="chat-bubble-success"
        avatar="✅"
      />
      <ChatBubble
        message="Chat bubble with different color"
        bubbleColor="chat-bubble-warning"
        avatar="😱"
      />
      <ChatBubble
        message="Chat bubble with different color"
        bubbleColor="chat-bubble-error"
        avatar="😵"
      />

      <div className="divider">Message Content</div>
      <ChatBubble
        message={{ type: 'text', content: 'You can put text in bubble' }}
      />
      <ChatBubble
        message={{
          type: 'markdown',
          content: `# Markdown

You can also put markdown here.

1. List
2. Items
3. Here

* Bullet
* Points
* Here`,
        }}
      />
      <ChatBubble
        message={{
          type: 'image',
          content:
            'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
        }}
      />
      <ChatBubble
        message={[
          {
            type: 'text',
            content: 'You can also mix text and image content together',
          },
          {
            type: 'image',
            content:
              'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
          },
        ]}
      />
      <ChatBubble>
        <div>Or whatever content you like</div>
        <div className="flex flex-row gap-2">
          <button className="btn">Buttons</button>
          <button className="btn btn-primary">also</button>
          <button className="btn btn-secondary">can</button>
        </div>
      </ChatBubble>
    </main>
  );
}
