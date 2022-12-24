document.addEventListener('DOMContentLoaded', () => {

	console.log('dom loaded');

	const canvas = document.querySelector('#canvas');
	const ctx = canvas.getContext('2d');
	
	const resize_factor = 0.2;
	
	
	const img = new Image();
	img.src = 'img/tokyo.jpg';
	img.addEventListener('load', () => AdjustCanvas(canvas, ctx, img, resize_factor));
	canvas.addEventListener('mousemove', (e) => {
		const rect = canvas.getBoundingClientRect();
		console.log(e.x - rect.x, e.y - rect.y);
	})
});

function AdjustCanvas(canvas, ctx, img, resize_factor) {
	canvas.width = Math.floor(img.width*resize_factor) + 20;
	canvas.height = Math.floor(img.height*resize_factor) + 20;
	ctx.drawImage(
		img,
		10,
		10,
		Math.floor(img.width*resize_factor),
		Math.floor(img.height*resize_factor),
	);
	return;
};