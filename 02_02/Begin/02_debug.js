// Learning Functional Programming with Javascript
// Chapter 02, Video 02, Exercise 02

const DEBUG_MODE_ENABLED = true;

var debug



function debug(message) {
  if(DEBUG_MODE_ENABLED){
    console.log(message)
  }else{
    doNothing()
  }
}

// ...

debug("Some debug message")

// ...

function printDebugMessage(message) {
  console.log("DEBUG: " + message)
}

function doNothing() {
  console.log("debug mode off");
 }
