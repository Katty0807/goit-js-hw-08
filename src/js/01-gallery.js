// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';
// Change code below this line
const galleryDivEl = document.querySelector('.gallery');
const cardsMarkup = galleryItems.map(
    ({ preview, original, description }) =>
        `<li class="gallery__link">
        <a class="gallery__item" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        alt="${description}" />
        </a>
        </li>`
).join('');

galleryDivEl.insertAdjacentHTML('beforeend', cardsMarkup)

let lightbox = new SimpleLightbox(".gallery__item", {
  captions: true,
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
  disableScroll: true,
});

lightbox.on('closed.simplelightbox', function () {
 console.log('Спасибо за уделенное время');   
});
console.log(galleryItems);
console.log(galleryItems);
