let promise = true;

const Promises = new Promise((resolve, reject) => {
	if(promise){
		resolve('promises has been kept')
	}else{
		reject('promise not kept')
	}
})

Promises.then(
    function(value) {console.log(value);},
    function(error) {console.log(error);}
  );