let trafficLight = "red";

// if...else method
if (trafficLight === "red") {
  console.log("Stop");
} else if (trafficLight === "yellow") {
  console.log("Get ready");
} else if (trafficLight === "green") {
  console.log("Go");
} else {
  console.log("Invalid traffic light color");
}

// switch method
switch (trafficLight) {
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Get ready");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Invalid traffic light color");
}
