#!/usr/bin/env node
import { getAnswer } from '../src/cli.js';

export let name = '';
export const greetings = () => {
  console.log('Welcome to the Brain Games!');
  name = getAnswer('May I have your name?  ');
  console.log(`Hello, ${name}`);
};
