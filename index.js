//function shout(string) {
//} 
function shout(string) {
    return string.toUpperCase();
  } 

shout('hello')

//function whisper(string) {
//} 
function whisper(string) {
    return string.toLowerCase();
  } 

shout('HELLO')

//function logShout(string) {
//} 
function logShout(string) {
    console.log (string.toUpperCase())
  } 

shout('hello')

//function logWhisper(string) {
//} 
function logWhisper(string) {
    console.log (string.toLowerCase())
  } 

shout('HELLO')

/*  sayHiToGrandma(string)
    4) returns "I can't hear you!" if `string` is lowercase
    5) returns "YES INDEED!" if `string` is uppercase
    6) returns "I love you, too." if `string` is "I love you, Grandma."`
*/

function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) {
    return "I can't hear you!"
  }

  if (string.toUpperCase() === string) {
    return "YES INDEED!"
  }

  if (string === "I love you, Grandma.") {
    return "I love you, too."
  }
}