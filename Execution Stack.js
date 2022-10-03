let x = "Hello World";
function a() {
    console.log("first");
    function b() {
        function c(){
            console.log("third")
        }
        console.log("second");
        c();
}
b();
}
a();
console.log('GEC');
