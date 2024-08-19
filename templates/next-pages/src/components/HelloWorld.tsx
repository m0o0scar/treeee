import { FC } from 'react';

export interface HelloWorldProps {
  name?: string;
}

export const HelloWorld: FC<HelloWorldProps> = ({ name = 'World' }) => {
  return <h1>Hello, {name}!</h1>;
};
