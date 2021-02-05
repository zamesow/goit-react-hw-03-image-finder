import React, { Component } from 'react';
// import * as basicLightbox from 'basiclightbox';
import mc from './Modal.module.css';

export default class Modal extends Component {
  //   modalOpen = e => {
  //     const instance = basicLightbox.create(`
  //               <h1>IT'S THE MODAL</h1>
  //           `);
  //   const open = 'Modal is open';
  //   console.log(open);
  //   };

  handleModalClose = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
      console.log('Кликнули в бекдроп');
    }
  };

  render() {
    return (
      <div className={mc.Overlay} onClick={this.handleModalClose}>
        <div className={mc.Modal}>
          <h1>Hello World</h1>
          <img src="" alt="" />
        </div>
      </div>
    );
  }
}
