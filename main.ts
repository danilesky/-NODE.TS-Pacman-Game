//This is level array
let level = [
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "x                                x",
  "x                                x",
  "x                                x",
  "x                                x",
  "x                                x",
  "x                                x",
  "x                                x",
  "x                                x",
  "x                                x",
  "x                                x",
  "x                                x",
  "x                                x",
  "x                                x",
  "x                                x",
  "x                                x",
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
];

//This is initializator (main function)
const init: any = (level: string[]) => {
  let i: number = 1;
  setInterval(async () => {
    level[i] = level[i].substring(0, i) + "o" + level[i].substring(i + 1);
    console.log(level);
    level[i] = level[i].substring(0, i) + " " + level[i].substring(i + 1);
    setTimeout(() => {
      console.clear();
      i++;
    }, 500);
  }, 500);
};

init(level);
