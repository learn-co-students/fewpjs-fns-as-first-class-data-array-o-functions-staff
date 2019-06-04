// I know it's silly but it bothered me to have the same 2 lines of code repeated 6x
function logAndReturn(string) {
  console.log(string);
  return string;
}

function wakeDog(dogName, dogBreed) {
  return logAndReturn(`Wake ${dogName} the ${dogBreed}`);
}

function leashDog(dogName, dogBreed) {
  return logAndReturn(`Leash ${dogName} the ${dogBreed}`);
}

function walkToPark(dogName, dogBreed) {
  return logAndReturn(`Walk to the park with ${dogName} the ${dogBreed}`);
}

function throwFrisbee(dogName, dogBreed) {
  return logAndReturn(`Throw the frisbee for ${dogName} the ${dogBreed}`);
}

function walkHome(dogName, dogBreed) {
  return logAndReturn(`Walk home with ${dogName} the ${dogBreed}`);
}

function unleashDog(dogName, dogBreed) {
  return logAndReturn(`Unleash ${dogName} the ${dogBreed}`);
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed) {
  const outputs = [];
  // assuming we are supposed to do this and not forEach
  for (let i=0; i<routine.length; i++) {
    outputs.push(routine[i](dogName, dogBreed));
  }
  return outputs;
}
