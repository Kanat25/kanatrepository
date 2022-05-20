const kvadrat = document.querySelector('.obj');
const blocks = document.querySelector('.block');

let position = 0;
let topPosition = 0;


const move = () => {
    if (position < 350 && topPosition == 0) {
        position += 16;
        kvadrat.style.left = `${position}px`;
        setTimeout(() => {
            move();
        }, 200);
    } else if (position >= 350 && topPosition <= 350) {
        topPosition += 16;
        kvadrat.style.top = `${topPosition}px`;
        setTimeout(() => {
            move();
        }, 200);
    } else if (topPosition >= 350 && position != 0) {
        position -= 16;
        kvadrat.style.left = `${position}px`;
        setTimeout(() => {
            move();
        }, 200);
    } else if (position == 0 && topPosition != 0) {
        topPosition -= 16;
        kvadrat.style.left = `${position}px`;
        setTimeout(() => {
            move();
        }, 200);
    }
}
move();
