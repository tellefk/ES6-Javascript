import {TIMEOUT_SEC} from "./config"

const timeout = function (s) {
    return new Promise(function (_, reject) {
      setTimeout(function () {
        reject(new Error(`Request took too long! Timeout after ${s} second`));
      }, s * 1000);
    });
  };


export const getJson=async function(url){
    try{
        const res=await Promise.race([fetch(url),timeout(TIMEOUT_SEC)]); // used to timeout request. promise.race(first promise that resolves or rejects is triggerd)
        const data=await res.json();
        if (!res.ok) throw new Error(`${data.message}`);
        return data
    }catch(err){
        console.log("ERROR AT helper.js")
        throw err //handle error in model file instad

    }


}