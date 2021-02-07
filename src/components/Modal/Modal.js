import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import mc from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.keyModalClose);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyModalClose);
  }

  keyModalClose = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
      console.log('Закрыли по Escape');
    }
  };

  mouseModalClose = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
      console.log('Кликнули в бекдроп');
    }
  };

  render() {
    const { largeImageURL } = this.props;
    console.log(`largeImageURL: ${largeImageURL}`);

    return createPortal(
      <div className={mc.Overlay} onClick={this.mouseModalClose}>
        <div className={mc.Modal}>
          <img src={largeImageURL} alt="largeImage" height="600" />
        </div>
      </div>,
      modalRoot,
    );
  }
}

// note 10. Модалка компонент
// управление в App
// если в <div> будет {this.props.children}, то можно из любого места в модалку передавать всё, что угодно

// Портал для модалки
// index.html - "modal-root"
// создаём ещё один корневой элемент и id к нему (элементов может быть много отдельных)
// document.querySelector('#modal-root'), вне класса
// import {createPortal} from 'react-dom';
// рендерить нужно не ссылку, а результат вызова return createPortal()
// внутри должна быть разметка и ссылка на modalRoot

// Закрытие по клику на бекдроп
// пишем ф-цию  на закрытие модалки: если тыкаем туда, где ловим (сравнение таргетов), то вызываем this.props.onClose() - этот пропс прописан в App и он вызывает toggleModal

// Закрытие по кнопке
// при монтировании (открытии) модалки вешаем слушатель на window на нажатие кнопки
// пишем ф-цию: при событии, если код события Escape вызываем ф-цию закрытия модалки

// Чистка
// при размонтировании (закрытии) снимаем слушатель с окна
