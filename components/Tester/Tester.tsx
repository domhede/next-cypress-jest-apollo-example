import { Heading } from '@chakra-ui/react';

export interface TesterProps {
  name: string;
}

export function Tester({ name }: TesterProps) {
  return <Heading color="tomato">Hello {name}</Heading>;
}
