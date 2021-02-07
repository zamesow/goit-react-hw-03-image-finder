import ImageGalleryItem from '../ImageGalleryItem/';
import PropTypes from 'prop-types';
import mc from './ImageGallery.module.css';

export default function ImageGallery({ photos, children, onClick }) {
  //   const index = photos.indexOf();
  return (
    <div>
      <ul className={mc.ImageGallery}>
        {photos.map(photo => (
          <li key={photo.id}>
            <ImageGalleryItem
              photo={photo}
              largeImageURL={photo.largeImageURL}
              onClick={onClick}
            />
          </li>
        ))}
      </ul>
      <div style={{ textAlign: 'center' }}>{children}</div>
    </div>
  );
}

ImageGallery.propTypes = {
  photos: PropTypes.array.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

// note 7. принимаем наш массив
// 'мапим его на части и возвращаем разметку из <ImageGalleryItem photo={photo} />
// 'отправляем пропс с одной картинкой и её данными
// 'для li необходим ключ
