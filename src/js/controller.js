const headerHeroTitleChange = document.querySelector("#hero-content");
const delay = 2000;
let count = 0;

// Still a small error - it doesn't run the animation as soon as the page loads
// Solution? - atach the function to a pageLoads eventHandler or turn the function to Async/Await

setInterval(() => {
  const wordsArr = ["MADE", "BORN", "FORGED"];
  const tm = setTimeout(function () {
    headerHeroTitleChange.textContent = wordsArr[count++];
    if (count === wordsArr.length) {
      clearInterval(tm);
      count = 0;
    }
  }, delay);
}, delay);
