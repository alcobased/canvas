let info = document.createElement('p');
document.body.appendChild(info);
info.innerHTML = 'foo';

const canvas = document.querySelector('#canvas');
canvas.height = 500;
const ctx = canvas.getContext('2d');


const img = new Image();
img.addEventListener('load', () => {
	canvas.addEventListener('mousemove', (event) => {
		if (event.buttons) {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.drawImage(img, event.x-100, event.y-100, 200, 200);
		}
		info.innerHTML = `x: ${event.x}, y: ${event.y}`
	})
});
img.src = 'img/tokyo.jpg'



// const HEIGHT = 10;
// const WIDTH = 10;
// const CELL_SIZE = 30;



// ctx.lineWidth = 1;
// ctx.strokeStyle = '#555'

// for (let i = 0; i < WIDTH; i++) {
//   for (let j = 0; j < HEIGHT; j++) {
//     console.log(i, j);
//     ctx.strokeRect(
//       i * CELL_SIZE,
//       j * CELL_SIZE,
//       CELL_SIZE,
//       CELL_SIZE);
//   }
// }