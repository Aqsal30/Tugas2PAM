function greeting(name) {
  console.log("hello" + name);
}

function processUserInput(callback) {
  const name = "Aqsal";
  callback(name);
}

processUserInput(greeting);