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
  url: string;
}

export interface ChatMessageFile {
  type: 'file';
  url: string;
  name?: string;
  mimeType?: string;
}

export type ChatMessageType =
  | ChatMessageText
  | ChatMesageMarkdown
  | ChatMessageImage
  | ChatMessageFile;

export type ChatMessage = string | ChatMessageType | ChatMessageType[];
