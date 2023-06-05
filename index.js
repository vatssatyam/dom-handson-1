// Write the code to access element which is having id as "text"

let hii = document.getElementById("text");
console.log(hii.innerHTML);
// Write the code to access element which is having tag as "h1"
let tag1 = document.getElementsByTagName("h1");
console.log(tag1[1].innerHTML);

// Write the code to access element which is having class as "box"
let box = document.getElementsByClassName("box");
console.log(box[0].innerHTML);

//"<h1>Hello </h1> Change the heading from
// ""Hello"" to ""Hello World"" using DOM functions"

let q4 = document.getElementById("q4");
let c1 = 0;
function changeText() {
  if (c1 % 2 == 0) {
    q4.innerHTML = "Hello World";
    c1++;
  } else {
    q4.innerHTML = "Hello ";
    c1--;
  }
}

// Q5." Create an HTML page having content as Hello world and a button
// named Replace Text. When user will click on this button page content
// should be changed to "Welcome to Elevation academy" ?
// second method

let c = 0;
let Replace1 = document.getElementsByClassName("button");
let q5 = document.getElementById("q5");
q5.innerHTML = "Hello";

Replace1[1].addEventListener("click", () => {
  if (c % 2 == 0) {
    q5.innerHTML = "Welcome to Elevation academy";
    c++;
  } else {
    q5.innerHTML = "Hello";
    c--;
  }
});

// Q6. " < h1>Hello< /h1> . Add one style attribute and give text color
// as red and id attribute and give the id value as ""heading"" in the
// above given h1 tag using DOM functions"?

let ele = document.getElementsByTagName("h1");

ele[2].setAttribute("style", "color:red");
ele[2].setAttribute("id", "heading");
console.log(ele[2]);

// Q7." Create three cards on HTML page and arrange them using flex
// property in row or horizontal direction and also create button at the
// bottom named "Change Flex direction". When user clicks on this button,
// the cards arrangement should be changed to vertical direction. ?

let flex1 = document.getElementsByClassName("flex");
let d1 = 0;
console.log(flex1[0]);
function flexChange() {
  if (d1 % 2 == 0) {
    flex1[0].setAttribute("style", "flex-direction:column");

    console.log("yes");
    d1++;
  } else {
    flex1[0].setAttribute("style", "flex-direction:row");
    console.log("no");
    d1--;
  }
}
//Q8 . What’s the difference between window vs document?

//q9 Write code to implement timer clock using JS -- display HH:MM:SS -- \
// the time should keep updating every second

let start = document.getElementById("clockStart");
let dispay = document.getElementById("clock");
start.addEventListener("click", () => {
  function startClock() {
    let time = new Date();
    let hrs = time.getHours();
    let mins = time.getMinutes();
    let secs = time.getSeconds();
    let AMPM = "AM";
    console.log(mins);
    if (hrs > 12) {
      hrs -= 12;
      AMPM = "PM";
    }
    dispay.innerHTML = `Hours ${hrs}: Minutes ${mins}: Seconds ${secs} :${AMPM}`;
  }
  setInterval(() => {
    startClock();
  }, 1000);
});