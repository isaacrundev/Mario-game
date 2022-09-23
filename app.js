let score = 0;

const scoreP = document.createElement("h1");
document.body.prepend(scoreP);
scoreP.innerHTML = `SCORE: ${score}`;

const intro = document.querySelector("#intro");
const walk = document.querySelector("#walk");
const eat = document.querySelector("#eat");

// intro.play();

function isTouching(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();

  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
}

// function isTouchingWall(a, w) {
//   const aRect = a.getBoundingClientRect();

//   return (
//     aRect.top + aRect.height - 50 < 0 ||
//     aRect.top + 50 > w.innerHeight ||
//     aRect.left + aRect.width - 50 < 0 ||
//     aRect.left + 50 > w.innerWidth
//   );
// }

const init = () => {
  //get the avatar
  //get the coin

  moveCoin();
  window.addEventListener("keyup", function (e) {
    const avatar = document.querySelector("#avatar");
    // const windowObj = this.window;

    // if (isTouchingWall(avatar, windowObj)) {
    //   moveVertical(avatar, 0);
    //   moveHorizontal(avatar, 0);
    // } else
    if (e.key === "ArrowDown" || e.key === "Down") {
      avatar.style.transform = "none";
      avatar.style.transform = "rotate(-90deg)";
      walk.play();
      moveVertical(avatar, 50);
    } else if (e.key === "ArrowUp" || e.key === "Up") {
      avatar.style.transform = "none";
      avatar.style.transform = "rotate(90deg)";
      walk.play();
      moveVertical(avatar, -50);
    } else if (e.key === "ArrowLeft" || e.key === "Left") {
      avatar.style.transform = "scaleX(1)";
      walk.play();
      moveHorizontal(avatar, -50);
    } else if (e.key === "ArrowRight" || e.key === "Right") {
      avatar.style.transform = "scaleX(-1)";
      walk.play();
      moveHorizontal(avatar, 50);
    }

    // if (isTouching(avatar, coin)) moveCoin();
    if (isTouching(avatar, coin)) {
      moveCoin();
      eat.play();
      score++;
    }

    scoreP.innerHTML = `SCORE: ${score}`;
  });
};

const moveVertical = (element, amount) => {
  const currTop = extractPos(element.style.top);
  element.style.top = `${currTop + amount}px`;
};

const moveHorizontal = (element, amount) => {
  const currTop = extractPos(element.style.left);
  element.style.left = `${currTop + amount}px`;
};

const extractPos = (position) => {
  if (!position) return 100;
  return parseInt(position.slice(0, -2));
};

const moveCoin = () => {
  const x = Math.floor(Math.random() * window.innerWidth);
  // const y = ?
  const y = Math.floor(Math.random() * window.innerHeight);

  coin.style.top = `${x}px`;
  // coin.style.?? = ??
  coin.style.left = `${y}px`;
};

init();
