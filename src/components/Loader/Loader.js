import React from 'react';
import Loader from 'react-loader-spinner';
import mc from './Loader.module.css';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default function LoaderSpinner() {
  return (
    <Loader
      type="TailSpin"
      color="yellowgreen"
      height={100}
      width={100}
      timeout={3000}
      className={mc.Loader}
    />
  );
}
