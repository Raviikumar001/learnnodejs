// const {readFile } =    require('fs')

// const getText = (path) =>{
//     return new Promise( (resolve, reject)=>{
//         readFile( path, 'utf-8', (err,data)=>{

//             if(err)
//             {
//                 reject(err)
//             }else{
//                  resolve(data)
//             }
//         })

//     })
// }

// // getText('./content/first.txt').then (result => console.log(result)).catch(err => console.log(err));

// const start = async()=>{
//     try{
//         const  first =  await getText('./content/first.txt');
//         console.log(first);
//     }
//     catch(error){
//         console.log(error);
//     }
//     }

// start();

// const getText = (path)=>{

//     return new Promise( (resolve, reject)=>{
//        readFile( path, 'utf-8', (err,data)=>
//        {

//          if(err)
//          {
//             reject(err);
//          }else{
//             resolve(data)
//          }
//        })

//     } )

// }

const { readFile, writeFile } = require("fs");
const util = require("util");

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const frist = await readFilePromise("./content/first.txt", "utf-8");
    const second = await readFilePromise("./content/second.txt", "utf-8");
    console.log(frist, "", second);
    await writeFilePromise('./content/mind.txt','Hello this a new file','utf-8');
  } catch (error) {
    console.log(error);
  }
};

start();
