#!/usr/bin/node

const args = process.argv;

// Subtract 2 to account for the node executable and the script file path
const numArgs = args.length - 2;

if (numArgs === 0) {
  console.log('No argument');
} else if (numArgs === 1) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}