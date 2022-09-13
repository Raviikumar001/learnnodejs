
const {writeFileSync} = require('fs')

for( let i =0; i< 1000; i++)
{
  writeFileSync( './content/big.text',`Hello world ${i}\n`,{ flag: 'a'})
}