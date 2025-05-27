// Coding Challenge #3

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/

"use strict";

const wait = function (seconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = function (imgPath) {
  return new Promise((resolve, reject) => {
    const img = document.createElement("img");
    img.src = imgPath;
    img.addEventListener("load", () => {
      document.querySelector(".images").append(img);
      resolve(img);
    });

    img.addEventListener("error", () => {
      reject(new Error("Image not found"));
    });
  });
};

const loadNPause = async function () {
  try {
    let img = await createImage("img/img-1.jpg");
    await wait(2);
    img.style.display = "none";

    let img2 = await createImage("img/img-2.jpg");
    await wait(2);
    img2.style.display = "none";

    let img3 = await createImage("img/img-3.jpg");
    await wait(2);
    img3.style.display = "none";
  } catch (err) {
    console.error(err);
  }
};

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async (imgPath) => {
      const img = await createImage(imgPath);
      img.classList.add("parallel");
      return img;
    });

    // Wait for all promises to resolve
    const resolvedImgs = await Promise.all(imgs);
    console.log(resolvedImgs);
  } catch (err) {
    console.error(err);
  }
};

// Test data
const imgPaths = ["img/img-1.jpg", "img/img-2.jpg", "img/img-3.jpg"];
