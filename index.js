var kittens = ["Milo", "Otis", "Garfield"] //define your array here

function destructivelyAppendKitten(name) {
  kittens.push(name) // add a kitten using push
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop() //  remove kitten using pop
  return kittens
}