window.addEventListener('DOMContentLoaded', () => {

	window.onload = () => {
		let main = document.querySelector("main");
		const canvas = document.querySelector("canvas");
		canvas.width = main.clientWidth;
		canvas.height = main.clientHeight;
		const ctx = canvas.getContext("2d");
		const img = new Image();
		let status = document.querySelector("#status");
		img.src = "img/oho.jpg";
		img.onload = () => {
			const ratio = 5;
			const [dx, dy] = [20, 20];
			const [new_width, new_height] = [Math.ceil(img.width/ratio), Math.ceil(img.height/ratio)];
			ctx.drawImage(img, dx, dy, new_width, new_height);
			const img_data = ctx.getImageData(dx, dy, new_width, new_height);
			
			let new_data_array = new Uint8ClampedArray();
			let threshold = Math.round(255 * 3 / 2);
			canvas.addEventListener('wheel', (event) => {
				threshold = (event.deltaY > 0) ? Math.max(0, threshold-=10) : Math.min(255 * 3, threshold+=10);
				status.textContent = threshold;
				const img_data_array = ctx.getImageData(dx, dy, new_width, new_height).data;
				let [black_count, white_count] = [0, 0];
				for (let pos = 0; pos < img_data_array.length; pos += 4) {
					// const avg = Math.round((img_data_array[pos] + img_data_array[pos + 1] + img_data_array[pos + 2]) / 3);
					let sum = img_data_array[pos] + img_data_array[pos + 1] + img_data_array[pos + 2];
					for (let i = 0; i < 3; i++) {
						let value = (sum < threshold) ? 255 : 0;
						img_data_array[pos + i] = value;
						(value) ? white_count++ : black_count++;
					};
				};
				console.log(black_count, white_count);
				// const new_img_data = new ImageData(img_data_array, new_width, new_height);
				// ctx.putImageData(new_img_data, dx + new_width + 10, dy);
				ctx.putImageData(new ImageData(img_data_array, new_width, new_height), dx + new_width + 10, dy);
			});	
	  	};
	};
});