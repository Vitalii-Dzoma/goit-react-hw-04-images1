import { render } from '@testing-library/react';
import s from '../ImageGallery/ImageGallery.module.css';
import React from 'react';

export const ImageGallery = ({ children }) => {
  return <ul className={s.gallery}>{children}</ul>;
};

// class ImageGallery extends React.Component {
//   render() {
//     return <ul className={s.gallery}>{this.props.children}</ul>;
//   }
// }
// export default ImageGallery;
