//This is level array
let level = [
  ["xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"],
  ["x                                x"],
  ["x                                x"],
  ["x                                x"],
  ["x                                x"],
  ["x                                x"],
  ["x                                x"],
  ["x                                x"],
  ["x                                x"],
  ["x                                x"],
  ["x                                x"],
  ["x                                x"],
  ["x                                x"],
  ["x                                x"],
  ["x                                x"],
  ["x                                x"],
  ["xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"],
];

//This is initializator (main function)
setInterval(async () => {
  level.map((block) => console.log(block));
  setTimeout(() => console.clear(), 10);
}, 10);
