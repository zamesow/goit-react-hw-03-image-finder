import React from 'react';
import Loader from 'react-loader-spinner';
import { createPortal } from 'react-dom';
import mc from './Loader.module.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default function LoaderSpinner() {
  const spinnerRoot = document.querySelector('#spinner-root');
  return createPortal(
    <Loader
      type="ThreeDots"
      color="#3f51b5"
      height={50}
      width={100}
      timeout={5000}
      className={mc.Loader}
    />,
    spinnerRoot,
  );
}
