// Put your code here

const names = [
  "Nashville",
  "Hong Kong",
  "The back yard",
  "Earth",
  "London",
  "The mall",
  "Ryman Auditorium",
  "The Great Wall of China",
];

console.log("All Pace Names");

for (const name of names) {
  console.log(name);
}

const article = names.filter((the) => the.startsWith("The"));

console.log("'The' Place Names");

for (const name of article) {
  console.log(name);
}
