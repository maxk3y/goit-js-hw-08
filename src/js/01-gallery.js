import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const galleryItemMarkup = galleryMarkup(galleryItems);
gallery.innerHTML = galleryItemMarkup;

function galleryMarkup(galleryItems) {
  return galleryItems

    .map(
      item => `
      <li>
      <a class = "gallery__item" href = "${item.original}">
      <img
      class = "gallery__image"
      src="${item.preview}"
      alt = "${item.description}"
      />
      </a>
      </li>`
    )
    .join('');
}

const lightbox = new SimpleLightbox('.gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
});
