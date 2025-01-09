import type { Handler } from 'aws-lambda';

export const handler: Handler = async (event, context) => {
  // your function code goes here
  return 'Function from Amplify Name DemoFunction';
};