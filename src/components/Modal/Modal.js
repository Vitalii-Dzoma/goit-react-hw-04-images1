import React from 'react';
import s from '../Modal/Modal.module.css';
import { useState, useEffect } from 'react';

export const Modal = ({ onClose, largeImg }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <div className={s.overlay} onClick={handleBackdropClick}>
      <div className={s.modal}>
        <img src={largeImg.webformatURL} alt={largeImg.tags} width="100%" />
      </div>
    </div>
  );
};

// class Modal extends React.Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleKeyDown = e => {
//     if (e.code === 'Escape') {
//       this.props.onClose();
//     }
//   };

//   handleBackdropClick = e => {
//     if (e.currentTarget === e.target) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     const { largeImg } = this.props;

//     return (
//       <div className={s.overlay} onClick={this.handleBackdropClick}>
//         <div className={s.modal}>
//           <img src={largeImg.webformatURL} alt={largeImg.tags} width="100%" />
//         </div>
//       </div>
//     );
//   }
// }

// export default Modal;
