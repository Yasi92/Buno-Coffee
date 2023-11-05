// script.js
const imagePaths = [
    'assets/images/acai.jpeg',
    'assets/images/amstel-outside.jpg',
    'assets/images/coffee-2.jpeg',
    'assets/images/hoofdorp-outside-2.jpeg',
    'assets/images/pao.jpeg',
    'assets/images/tapioca.jpeg',
    'assets/images/toastie.jpeg',
    'assets/images/IMG_3582.jpeg',
    'assets/images/IMG_0021.png',
    'assets/gallery-images/iced-coffee.jpeg',
    'assets/gallery-images/lemonade.jpeg',
    'assets/gallery-images/IMG_5666.jpg',
    'assets/gallery-images/IMG_0019.jpg',
    'assets/gallery-images/IMG_6630.jpeg',
    'assets/images/',
    'assets/images/',
    'assets/images/',
    'assets/images/',
    'assets/images/',
    'assets/images/',
];

const gridContainer = document.getElementById('imageGrid');

imagePaths.forEach((imagePath) => {
    const gridItem = document.createElement('div');
    gridItem.className = 'grid-item';

    const image = document.createElement('img');
    image.src = imagePath;
    image.alt = 'Image';

    gridItem.appendChild(image);
    gridContainer.appendChild(gridItem);
});
