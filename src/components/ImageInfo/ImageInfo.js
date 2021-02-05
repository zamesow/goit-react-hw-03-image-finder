import React, { Component } from 'react';
import Button from '../Button';
import ImageGallery from '../ImageGallery';
// import ImagePendingView from '../ImagePendingView';
// import pixabayAPI from '../services/pixabay-api';

export default class ImageInfo extends Component {
  state = {
    photos: null,
    status: 'idle',
    error: '',
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevTag = prevProps.tagToSearchProps;
    const newTag = this.props.tagToSearchProps;
    const { page } = this.state;

    const apiKey = '18749198-d021e8b49b5886c25ed273569';

    if (prevTag !== newTag) {
      console.log(`Было: ${prevTag}`);
      console.log(`Стало: ${newTag}`);
      console.log(this.state.photos);
      console.log(this.state.page);

      this.setState({ status: 'pending' });

      fetch(
        `https://pixabay.com/api/?q=${newTag}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`,
      )
        .then(res => {
          if (res.ok) {
            return res.json();
          }

          return Promise.reject(
            new Error(`По запросу ${newTag} фото отсутствуют`),
          );
        })
        .then(nextPhotos => {
          this.setState(prevState => ({
            photos: { ...prevState.photos, ...nextPhotos },
            status: 'resolved',
          }));
          console.log(nextPhotos.hits);
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  onClickLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
    console.log(this.state.page + 1);
  };

  render() {
    const { status, photos } = this.state;
    // const { tagToSearch } = this.props;

    if (status === 'idle') {
      return <div style={{ textAlign: 'center' }}>Let's find something?</div>;
    }

    if (status === 'pending') {
      return <div style={{ textAlign: 'center' }}>Ищем...</div>;
      //   return <ImagePendingView />;
    }

    if (status === 'resolved') {
      return (
        <ImageGallery photos={photos.hits}>
          <Button onClick={this.onClickLoadMore} />
        </ImageGallery>
      );
    }

    // if (status === 'rejected') {
    //   return <div style={{ textAlign: 'center' }}>{error.message}</div>;
    // }
  }
}

// загрузка cтраницы 2
// модалка

// note 4. Отправка запроса (каждый шаг проверяем с console.log)
//  в стейт пишем свойство photos: null, для записи ответа от запроса
// componentDidUpdate(prevProps, prevState) {}
// обязательно наш запрос отправляем только при неравенстве if (prevTag !== newTag) {}
// деструктуризируем prevTag и newTag из prevProps.имя и this.props.проп
// пишем статус в стейт до запроса this.setState({ status: 'pending' });

// note 5. проверка запроса fetch(`наш адрес`).then(res => res.json()).then(console.log);
// 'проверка успешного запроса: .then(res => {if (res.ok) {return res.json();}...
// 'возврат промиса в случае неуспешного: ...return Promise.reject(new Error(`По запросу ${newTag} фото отсутствуют`),);
// ''записываем пришедший массив и успешный статус в стейт .then(photos => {this.setState({ photos, status: 'resolved' });})
// '''ловим ошибку, записываем сообщение в стейт и меняем статус на неуспешный .catch(error => this.setState({ error, status: 'rejected' }));

// note 6. рендер
// 'рендерим при каждом статусе что-то своё: if (status === 'resolved') {}
// 'при успехе рендерим нашу коллекцию фото и передаём в неё весь объект return <ImageGallery photos={photos} />;
