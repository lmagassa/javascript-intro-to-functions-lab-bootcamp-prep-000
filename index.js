function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  var spy = string.toUpperCase()
  console.log(`${spy}`)
}

function logWhisper(string) {
  var spy = string.toLowerCase()
  console.log(`${spy}`)
}

function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) {
  return 'I can\'t hear you!' 
<<<<<<< HEAD
  } 
  if (string === string.toUpperCase()) {
  return 'YES INDEED!'
  } 
  if (string === 'I love you, Grandma.') {
  return `I love you, too.`
  }
}
=======
  } else if (string === string.toUpperCase())
  return 'YES INDEED!'
  } else 
>>>>>>> 2767a04a143854a653fa971c22b8bf70a45a9e35
