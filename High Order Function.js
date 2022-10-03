function NamaDepan(a){
    return function NamaBelakang(b) { 
        console.log(a,b);
    };
}

let NamaLengkap = NamaDepan("Aqsal");
NamaLengkap("Yazid");