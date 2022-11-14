// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const galleryEl = document.querySelector('.gallery');

const createEl = galleryItems
  .map(items => {
    return `<a class="gallery__item" href="${items.original}">
    <img class="gallery__image" src="${items.preview}" alt="${items.description}" />
</a>`;
  })
  .join('');
galleryEl.insertAdjacentHTML('beforeEnd', createEl);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  animationSpeed: 400,
  captionDelay: 250,
});

console.log(galleryItems);
