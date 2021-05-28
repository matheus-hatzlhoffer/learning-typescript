import fs from 'fs';

const matches = fs
  .readFileSync('football.csv', {
    encoding: 'utf-8',
  })
  .split('\n')
  .map((row: string): string[] => {
    return row.split(',');
  });

let man_united = 0;

for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === 'H') {
    man_united++;
  } else if (match[2] === 'Man United' && match[5] === 'A') {
    man_united++;
  }
}

console.log(`Manchester won ${man_united} games`);
