import { error } from 'node:console';
import {readFile } from 'node:fs'; 

function readFilePromise(path) {
  // Your code
  const readPromise = new Promise((resolve, reject) => {
    readFile(`D:/coding/code/${path}`, (error, data)=> {
    if(error) {
        reject(`File cant be read ${error}`)
    }
    else {
        resolve(data.toString())
    }
  })
  })
  return readPromise; 
}

readFilePromise("tx.txt")
  .then(data => console.log(data))
  .catch(error => console.error(error));