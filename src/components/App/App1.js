import React from 'react';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { Loader } from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal';
import Button from 'components/Button/Button';
import { fetchImageCards } from '../../api/Api';
import { useState } from 'react';

export const App1 = () => {
  const [image, setImage] = useState(null);
  const [targetImg, setTargetImg] = useState(null);
  const [name, setName] = useState('');
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = e => {
    setShowModal(!showModal);
  };

  const onModalOpen = e => {
    toggleModal();
    if (image) {
      const targetImg = image.find(im => im.id === +e.target.id);
      setTargetImg(targetImg);
    }
  };

  const formSubmitHandler = data => {
    setCount(count);
    fetchImageCards(data.name, data.count)
      .then(image => setImage(image), setName(data.name), console.log(count))
      .finally(() => setLoading(false));
    setCount(data.count + 1);

    return image;
  };

  const completeRender = () => {
    if (formSubmitHandler) {
      setCount(count);
    }
    setCount(count + 1);
    setLoading(true);

    fetchImageCards(name, count)
      .then(
        imageNew => setImage([...image, ...imageNew], console.log(count))
        // this.setState(prevState => ({
        //   image: [...prevState.image, ...image],
        // }))
      )
      .finally(() => setLoading(false));
  };

  return (
    <>
      <Searchbar onSubmit={formSubmitHandler} count={count} />

      <ImageGallery>
        <ImageGalleryItem images={image} onClick={onModalOpen} />
      </ImageGallery>
      {loading && <Loader />}
      <Button images={image} onClick={completeRender} />
      {showModal && <Modal onClose={toggleModal} largeImg={targetImg} />}
    </>
  );
};

// class App1 extends React.Component {
//   state = {
//     image: null,
//     targetImg: null,
//     name: '',
//     count: 1,
//     loading: false,
//     showModal: false,
//   };

//   toggleModal = e => {
//     this.setState(({ showModal }) => ({
//       showModal: !showModal,
//     }));
//   };

//   onModalOpen = e => {
//     this.toggleModal();
//     if (this.state.image) {
//       const targetImg = this.state.image.find(im => im.id === +e.target.id);
//       this.setState({
//         targetImg: targetImg,
//       });
//     }
//   };

//   formSubmitHandler = data => {
//     fetchImageCards(data.name, (this.state.count = 1))
//       .then(image => this.setState({ image: image, name: data.name }))
//       .finally(() => this.setState({ loading: false }));

//     this.setState(prevState => ({
//       count: prevState.count + 1,
//     }));

//     return this.state.image;
//   };

//   completeRender = () => {
//     this.setState(prevState => ({
//       count: prevState.count + 1,
//       loading: true,
//     }));
//     fetchImageCards(this.state.name, this.state.count)
//       .then(image =>
//         this.setState(prevState => ({
//           image: [...prevState.image, ...image],
//         }))
//       )
//       .finally(() => this.setState({ loading: false }));
//   };

//   render() {
//     const { showModal } = this.state;
//     if (this.state.image) {
//     }

//     return (
//       <>
//         <Searchbar onSubmit={this.formSubmitHandler} />

//         <ImageGallery>
//           <ImageGalleryItem
//             images={this.state.image}
//             onClick={this.onModalOpen}
//           />
//         </ImageGallery>
//         {this.state.loading && <Loader />}
//         <Button images={this.state.image} onClick={this.completeRender} />
//         {showModal && (
//           <Modal onClose={this.toggleModal} largeImg={this.state.targetImg} />
//         )}
//       </>
//     );
//   }
// }

// export default App1;
