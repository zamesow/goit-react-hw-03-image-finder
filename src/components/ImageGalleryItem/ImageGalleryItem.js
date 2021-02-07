import React from 'react';
import PropTypes from 'prop-types';
import mc from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ photo, onClick }) {
  const { id, webformatURL, largeImageURL } = photo;

  return (
    <div>
      <ul className={mc['ImageGalleryItem-container']}>
        <li className={mc.ImageGalleryItem}>
          <img
            src={webformatURL}
            alt={id}
            className={mc['ImageGalleryItem-image']}
            data-source={largeImageURL}
            onClick={onClick}
          />
        </li>
      </ul>
    </div>
  );
}

ImageGalleryItem.propTypes = {
  photo: PropTypes.object.isRequired,
};

// note 8. принимаем пропс и достаём из него нужные свойства
// присваиваем данные src и alt
