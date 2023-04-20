//your code here
// Render a h3 tag with id=”h” with text
// “Please click on the identical tiles to verify that you are not a robot.”

/* -----------------1st Step------------------- */
// a. Creating an h3 tag with the help of document.createElement
let h3 = document.createElement("h3"); // type is object

//b. setting an attribute to the h3 tag
h3.setAttribute("id", "h"); //setAttribute(name, value)

//c. Adding an element to the tag
h3.innerHTML =
  "Please click on the identical tiles to verify that you are not a robot.";

//d. Append to the body
/* Append- can take string and object also and it will add at bottom
Prepend - add at top
AppendChild - can only take object */
document.body.prepend(h3);

/* -----------------2nd Step------------------- */

//a. Creating Buttons
/* let btn = document.createElement("button");

btn.setAttribute("id", "reset"); //b. setting attribute to the button

btn.innerHTML = "Reset"; //c. inserting to the html body

document.body.append(btn); //d. displaying to the screen */

//b.
/* let btn2 = document.createElement("button");

btn2.setAttribute("id", "verify"); //b. setting attribute to the button

btn2.innerHTML = "Verify"; //c. inserting to the html body

document.body.append(btn2); //d. displaying to the screen */

//c. or we can also use array to make code shorter

let btn = ["reset", "verify"];
for (let t of btn) {
  let buttons = document.createElement("button");
  buttons.setAttribute("id", t);
  buttons.innerHTML = t.toUpperCase();
  /* buttons.style.cssText="color:blue; background-color:white" */ //we can use .cssText to add multiple css styles
  buttons.style.display = "none"; // Adding the states
  document.body.append(buttons);
}

/*----------------3rd step------------------  */
//a. setting class name to the images using array
let imgClass = ["img1", "img2", "img3", "img4", "img5"];

//b.creating random Index
let randomIndex = Math.floor(Math.random() * imgClass.length); // this will be in 0,1,2,3,4,5

// c. assigning randomIndex to the image class to get random image
let randomImg = imgClass[randomIndex];

//d. pushing to the array
imgClass.push(randomImg); // push add element at last index of the array\

// mid-step --> to shuffle the images everytime
let arr1 = []; //i. creating an empty array

// ii. creating while loop
let i = 0;
while (i < imgClass.length) {
  let randomIndex1 = Math.floor(Math.random() * imgClass.length);

  if (arr1[randomIndex1] == undefined) {
    //arr[3]== undefined; then ;; arr[3]=imgClass[1];
    arr1[randomIndex1] = imgClass[i];
    i++;
  } else if (arr1[randomIndex1] != undefined) {
    continue;
  }
}

//e. selecting all images
let images = document.querySelectorAll("img");

// f. using for of loop

// let k=0
/* for (let t of imgClass){
        images[k].setAttribute("class", t)
        k++
    } */

//--------or--------

//for sequense order
/* for (let i = 0; i < imgClass.length; i++) {
  images[i].setAttribute("class", imgClass[i]); //setAttribute(name, value)
}
 */

// for random order

for (let i = 0; i < arr1.length; i++) {
  images[i].setAttribute("class", arr1[i]); //setAttribute(name, value)
  images[i].setAttribute("id", i);
}

for (let t of images) {
  t.addEventListener("click", userOrRobot);
}

let resetBtn = document.getElementById("reset");
let verifyBtn = document.getElementById("verify");

let prevImgId = ""; // store the previous image id
let count = 0; // counting clicks

function userOrRobot(event) {
  // e or event
  resetBtn.style.display = "inline";
  let currentImgID = event.target.id;
  if (currentImgID != prevImgId) {
    images[currentImgID].classList.add("selected");
    count++;
    prevImgId = currentImgID;
    if (count == 2) {
      verifyBtn.style.display = "inline";
    }
  }
}

let p = document.createElement("p");
resetBtn.addEventListener("click", () => {
  resetBtn.style.display = "none";
  verifyBtn.style.display = "none";
  count = 0;
  selectedImages = document.querySelectorAll(".selected");
  for (let t of selectedImages) {
    t.classList.remove("selected");
    p.style.display="none"
  }
});

verifyBtn.addEventListener("click", () => {
  selectedImages = document.querySelectorAll(".selected");
  let class1 = selectedImages[0].className;
  let class2 = selectedImages[1].className;
  // verifyBtn.style.display="none"
   p.style.display="block"
  if (class1 == class2) {
    p.innerHTML = "Your are a human. Congratulations! ";
  } else {
    p.innerHTML =
      "We can't verify you as a human. You selected the non-identical tiles.";
  }
  verifyBtn.style.display = "none";
  document.body.append(p);
});