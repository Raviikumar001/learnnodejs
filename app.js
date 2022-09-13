
const {createReadStream} = require('fs');

const stream = createReadStream('./content/big.txt', {
  highWaterMark:9000,},
);

stream.on('data', (data)=>{
  console.log(data);
})

stream.on('error',(error)=>{
  console.log(error);
})