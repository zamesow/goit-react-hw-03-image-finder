import React, { Component } from 'react';
import PropTypes from 'prop-types';
import mc from './Searchbar.module.css';

export default class Searchbar extends Component {
  state = {
    tagToSearch: '',
  };

  handleTagChange = e => {
    this.setState({ tagToSearch: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    const { tagToSearch } = this.state;
    e.preventDefault();

    if (tagToSearch.trim() === '') {
      return alert('You must write anything before submit!');
    }

    this.props.onSubmit(tagToSearch);

    this.setState({ tagToSearch: '' });
  };

  render() {
    const { tagToSearch } = this.state;

    return (
      <div>
        <header className={mc.Searchbar}>
          <form className={mc.SearchForm} onSubmit={this.handleSubmit}>
            <button type="submit" className={mc['SearchForm-button']}>
              <span className={mc['SearchForm-button-label']}>Search</span>
            </button>

            <input
              className={mc['SearchForm-input']}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={tagToSearch}
              onChange={this.handleTagChange}
            />
          </form>
        </header>
      </div>
    );
  }
}

Searchbar.propTypes = {
  tagToSearch: PropTypes.string,
};

// note 1. отображение вводимого значения
// создаём имя tagToSearch: '' в state, для записи вводимого текста в форму
// ф-цию handleTagChange для записи в стейт по событию (нажатия)
// onChange={this.handleTagChange} связываем наше событие с ф-цией
// value={tagToSearch} нужно для отображения текущего (начального) значения в форме

// note 2. передача значения в стейт App по сабмиту
// ф-ция handleSubmit по событию
// запрет на обновление
// паттерн на alert по вводу пустого значения
// вызов пропса с передачей нашего тега this.props.onSubmit(this.state.tagToSearch)
// очищаем форму после сабмита this.setState({ tagToSearch: '' });
// вешаем в сабмит формы нашу ф-цию
// принимаем компонент <Searcbar /> в App
