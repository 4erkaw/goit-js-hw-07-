import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`
  )
  .join(" ");

gallery.insertAdjacentHTML("afterbegin", galleryMarkup);

gallery.addEventListener("click", onGalleryElemClick);

let instance = null;

function onGalleryElemClick(e) {
  e.preventDefault();
  const origImg = e.target.dataset.source;

  instance = basicLightbox.create(
    `<img src="${origImg}" width = "800" height = "600">`,
    {
      onShow: addListener,
      onClose: removeListener
    }
  );

  instance.show();
}

function addListener() {
    document.addEventListener("keydown", key)
}


function removeListener() {
    document.removeEventListener("keydown", key)
}

function key(e){
   if(e.code === "Escape"){
       instance.close()
   }
}
