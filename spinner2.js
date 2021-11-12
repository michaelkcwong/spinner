// //refactoring spinner1 to have less repetitive code

const spinner = '|/-\|/-\|';
let time = 0;

for (const spin of spinner) { //loop through spin of spinner
setTimeout(() => {
  process.stdout.write("\r" + spin) //print redrawing and spin
}, time)
time = time + 200; //delaying each spin by 200ms apart
};

setTimeout(() => {
  process.stdout.write("\n") //print newline after its done
}, time);