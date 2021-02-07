import React, { Component } from 'react';
import ImageInfo from './components/ImageInfo';
import Searchbar from './components/Searchbar';
import Modal from './components/Modal';

import './App.module.css';
// import LoaderSpinner from './components/Loader';

class App extends Component {
  state = {
    tagToSearch: '',
    largeImageURL: '',
  };

  onClickToSmallPicture = e => {
    const oldLargeURL = this.state.largeImageURL;
    const newLargeURL = e.target.dataset.source;

    if (oldLargeURL !== newLargeURL) {
      this.setState({ largeImageURL: newLargeURL });
    }
  };

  closeModal = () => {
    this.setState({ largeImageURL: '' });
  };

  // запись запроса в стейт
  handleFormSubmit = tagToSearch => {
    this.setState({ tagToSearch, status: 'resolved' });
  };

  render() {
    const { tagToSearch, largeImageURL } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageInfo
          onClick={this.onClickToSmallPicture}
          tagToSearchProps={tagToSearch}
        />

        {largeImageURL && (
          <Modal onClose={this.closeModal} largeImageURL={largeImageURL} />
        )}
      </>
    );
  }
}

export default App;

// добавить пропсы
// сделать скелетон

//  note 0. добавляем куда нужно стили и абсолютный экспорт

// note 3. передача tagToSearch в стейт App
// принимаем компонент <Searchbar />
// передаём ему пропс c ссылкой на ф-цию handleFormSubmit с записью тега в стейт
// создаём файл ImageInfo для запроса
// передаём в него пропс с нашим записанным тегом tagToSearchProps={tagToSearch}

// note 10.1. Модалка в App
//  импортируем компонент Modal
