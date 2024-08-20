export interface ChatMessageText {
  type: 'text';
  content: string;
}

export interface ChatMesageMarkdown {
  type: 'markdown';
  content: string;
}

export interface ChatMessageImage {
  type: 'image';
  content: string;
}

export type ChatMessageType =
  | ChatMessageText
  | ChatMesageMarkdown
  | ChatMessageImage;

export type ChatMessage = string | ChatMessageType | ChatMessageType[];
