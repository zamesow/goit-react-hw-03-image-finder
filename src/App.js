import React, { Component } from 'react';
// import LoaderSpinner from './components/Loader';
import ImageInfo from './components/ImageInfo';
import Searchbar from './components/Searchbar';
// import ImageGallery from './components/ImageGallery';
// import Modal from './components/Modal';
import './App.module.css';

class App extends Component {
  state = {
    tagToSearch: '',
    photos: 'тут должна быть фотка',
    // status: 'idle',
    // firstPage: 1,
    // showModal: false,
  };

  handleFormSubmit = tagToSearch => {
    this.setState({ tagToSearch, status: 'resolved' });
    console.log(`Новый тег "${tagToSearch}" записан в стейт App`);
  };

  // toggleModal = () => {
  //   this.setState(({ showModal }) => ({ showModal: !showModal }));
  //\\   !this.state.showModal && console.log('Открыли модалку');
  // };

  render() {
    const { tagToSearch } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageInfo tagToSearchProps={tagToSearch} />
        {/* <ImageGallery onSubmit={tagToSearch} /> */}
        {/* {
     <button type="button" onTagProps={this.toggleModal}>
          Открыть модалку
        </button>

        {this.state.showModal && <Modal onClose={this.toggleModal} />}
        } */}
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
