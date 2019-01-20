var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name)
{
  return kittens.push(name)
}

function destructivelyPrependKitten(name)
{
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten(name)
{
  return kittens.pop(name)
}

function destructivelyRemoveFirstKitten(name)
{
  return kittens.shift(name)
}

function appendKitten(name)
{
  var newArray = [...kittens, name]
  return newArray
}

function prependKitten(name)
{
  var newArray2 = [name, ...kittens]
  return newArray2
}

function removeLastKitten(name)
{
  var newArray3 = kittens.pop(name)
  return newArray3
}