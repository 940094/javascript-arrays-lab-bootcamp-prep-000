var kittens = ["Milo", "Otis", "Garfield"] //define your array here

function destructivelyAppendKitten(name) {
  kittens.push(name) // add a kitten using push
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop() //  remove kitten using pop
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name) // add name to start of array using unshift
  return kittens
}