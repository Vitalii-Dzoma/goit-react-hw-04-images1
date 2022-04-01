import React from 'react';
import s from '../Button/Button.module.css'
const Button = ({ images, onClick}) => {
    

    return (
      <>
        {images && (
          <button type="button" onClick={onClick} className={s.button}>
            <span className="button-label">Load more</span>
          </button>
        )}
      </>
    );
            
    }


export default Button;
