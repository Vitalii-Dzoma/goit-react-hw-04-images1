import React from 'react';
import s from '../Searchbar/Searchbar.module.css';
import { useState } from 'react';

export const Searchbar = ({ onSubmit, count }) => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');

  const handleChangeName = e => {
    const { value } = e.currentTarget;
    setName(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    count = 1;
    onSubmit({ image, name, count });

    // this.disabledButton();
    reset();
  };

  const reset = () => {
    setName('');
  };

  return (
    <header className={s.searchbar}>
      <form className={s.form} onSubmit={handleSubmit}>
        <button type="submit" className={s.button}>
          <span className="button-label"></span>
        </button>

        <input
          className={s.input}
          type="text"
          autoComplete="off"
          onChange={handleChangeName}
          autoFocus
          placeholder="Search images and photos"
          value={name}
        />
      </form>
    </header>
  );
};

// class Searchbar extends React.Component {
//   state = {
//     image: null,
//     name: '',
//   };

//   handleChangeName = e => {
//     const { name, value } = e.currentTarget;
//     this.setState({ name: value });
//     };

//   handleSubmit = e => {
//     e.preventDefault();

//     this.props.onSubmit(this.state);

//     // this.disabledButton();
//     this.reset();
//   };

//   reset = () => {
//     this.setState({ name: '' });
//   };

//   render() {
//     const { name } = this.state;
//     return (
//       <header className={s.searchbar}>
//         <form className={s.form} onSubmit={this.handleSubmit}>
//           <button type="submit" className={s.button}>
//             <span className="button-label"></span>
//           </button>

//           <input
//             className={s.input}
//             type="text"
//             autoComplete="off"
//             onChange={this.handleChangeName}
//             autoFocus
//             placeholder="Search images and photos"
//             value={name}
//           />
//         </form>
//       </header>
//     );
//   }
// }

// export default Searchbar
