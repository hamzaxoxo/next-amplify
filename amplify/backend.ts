import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource.js';
import { data } from './data/resource.js';
import { sayHello } from './functions/generateHaiku/resource';
import { demoFunction } from './functions/demoFunction/resource';
defineBackend({
  auth,
  data,
  sayHello,
  demoFunction
});
