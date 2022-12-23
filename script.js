document.addEventListener('DOMContentLoaded', () => {

	console.log('dom loaded');

	const canvas = document.querySelector('#canvas');
	AjustCanvas(canvas);
	const ctx = canvas.getContext('2d');

	
	const img = new Image();
	img.src = 'img/tokyo.jpg'
	
	window.onresize = () => {
		AjustCanvas(canvas);
	};
	
}
);

function AjustCanvas(canvas) {
	canvas.height = window.innerHeight - 20;
}