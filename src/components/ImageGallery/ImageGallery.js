import ImageGalleryItem from '../ImageGalleryItem/';
import mc from './ImageGallery.module.css';

export default function ImageGallery({ photos, children }) {
  //   const { hits } = photos;

  return (
    <div>
      <ul className={mc.ImageGallery}>
        {photos.map(photo => (
          <li key={photo.id}>
            <ImageGalleryItem photo={photo} />
          </li>
        ))}
      </ul>
      {children}
    </div>
  );
}

// note 7. принимаем наш объект и достаём из него массив объектов
// 'эмапим его на части и возвращаем разметку из <ImageGalleryItem photo={hit} />
// 'отправляем пропс с одной картинкой и её данными
