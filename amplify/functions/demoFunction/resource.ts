import { defineFunction } from '@aws-amplify/backend';

export const demoFunction = defineFunction({
  name: 'demo-function',
  entry: './handler.ts'
});