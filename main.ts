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

  //Coordinates marking END and START of the level
  const YstartLevel = 1;
  const YendLevel = level.length - 1;

  const XstartLevel = 1;

  setInterval(async () => {
    if (i === YstartLevel || i === YendLevel) {
      i = 1;
    }
    level[i] = level[i].substring(0, i) + "o" + level[i].substring(i + 1);
    console.log(level);
    level[i] = level[i].substring(0, i) + " " + level[i].substring(i + 1);
    setTimeout(() => {
      console.clear();
      i++;
    }, 100);
  }, 100);
};

init(level);
