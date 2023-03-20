const historiaLink = document.querySelector('.mostrar-historia');
const historiaContainer = document.querySelector('.historia-container');

historiaLink.addEventListener('click', function(e) {
   e.preventDefault();
   historiaContainer.classList.toggle('visivel');
});

const gallery = document.querySelector('.gallery');
const images = [
	'imagem1.jpg',
	'imagem2.jpg',
	'imagem3.jpg',
	'imagem4.jpg',
	'imagem5.jpg',
	'imagem6.jpg',
	'imagem7.jpg',
	'imagem8.jpg',
	'imagem9.jpg',
	'imagem10.jpg',
	'imagem11.jpg',
	'imagem12.jpg',
	'imagem13.jpg',
	'imagem14.jpg',
	'imagem15.jpg',
	'imagem16.jpg',
	'imagem17.jpg',
	'imagem18.jpg',
	'imagem19.jpg',
	'imagem20.jpg',
	'imagem21.jpg',
	'imagem22.jpg',
	'imagem23.jpg',
	'imagem24.jpg',
];

images.forEach(image => {
	const img = document.createElement('img');
	img.src = image;
	img.alt = 'Imagem da galeria';
	gallery.appendChild(img);
});

document.getElementById('show-photos').addEventListener('click', function() {
	var gallery = document.getElementById('photo-gallery');
	if (gallery.style.display === 'none') {
	  gallery.style.display = 'block';
	} else {
	  gallery.style.display = 'none';
	}
  });
  
 


