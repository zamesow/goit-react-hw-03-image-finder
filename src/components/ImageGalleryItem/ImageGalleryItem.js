import React from 'react';
import mc from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ photo }) {
  const { id, webformatURL } = photo;
  //   this.props.photo(photo);
  return (
    <div>
      <ul className={mc['ImageGalleryItem-container']}>
        <li className={mc.ImageGalleryItem}>
          <img
            src={webformatURL}
            alt={id}
            className={mc['ImageGalleryItem-image']}
          />
        </li>
      </ul>
    </div>
  );
}

// note 8. принимаем пропс и достаём из него нужные свойства
// присваиваем каждому <li> свой ключ
// присваиваем данные src и alt
