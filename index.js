function greetings(params) {
  let greeting = "Ciao ";
  greeting += params;
  console.log(greeting);
}

const params = process.argv.slice(2).join(" ");

greetings(params);
