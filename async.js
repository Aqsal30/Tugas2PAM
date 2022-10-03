let promise = true;
async function myasync(){
    const Promises = new Promise((resolve, reject) => {
        if(promise){
            resolve('promises has been kept')
        }else{
            reject('promise not kept')
        }
    });

    let hasil = await Promises;
    console.log(hasil);
}
myasync();