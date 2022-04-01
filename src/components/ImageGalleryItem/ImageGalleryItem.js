import React from 'react';
import s from '../ImageGalleryItem/ImageGalleryItem.module.css';
const ImageGalleryItem = ({ images, onClick }) => {
  return (
    <>
      {images &&
        images.map((image, index) => (
          <ul>
            <li key={index} className={s.galleryItem}>
              <img
                id={image.id}
                className={s.galleryImg}
                onClick={onClick}
                src={image.webformatURL}
                alt={image.tags}
                width="300px"
              />
            </li>
          </ul>
        ))}
    </>
  );
};

export default ImageGalleryItem;
