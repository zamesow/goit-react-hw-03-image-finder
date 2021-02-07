import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoaderSpinner from '../Loader';
import Button from '../Button';
import ImageGallery from '../ImageGallery';

import photoAPI from '../services/fetch-api';

export default class ImageInfo extends Component {
  state = {
    photos: [],
    tagToSearch: '',
    status: 'idle',
    error: null,
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevTag = prevProps.tagToSearchProps;
    const newTag = this.props.tagToSearchProps;

    if (prevTag !== newTag) {
      this.setState({ photos: [], tagToSearch: newTag, page: 1, error: null });
    }

    if (prevState.tagToSearch !== this.state.tagToSearch) {
      this.fetchSearch();
    }
  }

  fetchSearch = () => {
    const { tagToSearch, page } = this.state;
    this.setState({ status: 'pending' });

    photoAPI
      .fetchPhotos(tagToSearch, page)
      .then(nextPhotos => {
        console.log(nextPhotos);
        if (nextPhotos.length === 0) {
          return alert(`Sorry, but we don't find "${tagToSearch}"`);
        }
        this.setState(prevState => ({
          photos: [...prevState.photos, ...nextPhotos],
          status: 'resolved',
          page: prevState.page + 1,
        }));
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      })
      .catch(error =>
        this.setState({ error: error.message, status: 'rejected' }),
      );
  };

  render() {
    const { status, photos, error } = this.state;
    const { onClick } = this.props;
    if (status === 'idle') {
      return <h2 style={{ textAlign: 'center' }}>Let's search something?</h2>;
    }

    if (status === 'pending') {
      return (
        <>
          <ImageGallery photos={photos} onClick={onClick}>
            <LoaderSpinner />
            {/* <h2 style={{ textAlign: 'center' }}>Download...</h2> */}
          </ImageGallery>
        </>
      );
    }

    if (status === 'resolved') {
      return (
        <ImageGallery photos={photos} onClick={onClick}>
          <Button onClick={this.fetchSearch} />
        </ImageGallery>
      );
    }

    if (status === 'rejected') {
      return <h2 style={{ textAlign: 'center' }}>{error.message}</h2>;
    }
  }
}

ImageInfo.propTypes = {
  photos: PropTypes.array,
  tagToSearch: PropTypes.string,
  tagToSearchProps: PropTypes.string.isRequired,
  page: PropTypes.number,
  status: PropTypes.string,
  error: PropTypes.string,
};

// вывод ошибки
// модалка
// хранить в state App largeImageUrl
// onClick -> записть в стейтё
// по результату стейта, если не пустая строка открывается модалка
// ставим в модалку большое фото

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

// note 5.1. res.массив
// state = {photos = []} - null не работает с [...prevState.photos] в .then()
// достаём массив из приходящего объекта: .then(res => res.hits)

// note 6. рендер
// 'рендерим при каждом статусе что-то своё: if (status === 'resolved') {}
// 'при успехе рендерим нашу коллекцию фото и передаём в неё весь массив return <ImageGallery photos={photos} />;

// перенесли fetch
