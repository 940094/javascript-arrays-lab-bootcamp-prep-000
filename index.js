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

function destructivelyRemoveFirstKitten() {
  kittens.shift()  // remove first kitten using shift
  return kittens
}

function appendKitten(name) {
  var new_array = [...kittens, name]// add name to end of array and store in new array
  return new_array
}

function prependKitten(name) {
  var new_array = [name, ...kittens] // add name to start of array in new array
  return new_array
}

function removeLastKitten() {
  new_array = kittens.splice(0, kittens.length - 1)  // remove last kitten using splice() and store new array in new_array variable
  return new_array
}