import Modal from "react-modal"
import css from "../ImageModal/ImageModal.module.css"

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    backgroundColor: '#171616B2'
  }
};


const ImageModal = ({ selectedImage, closeModal}) => {
  console.log(selectedImage)
  return (
    <Modal
      isOpen={selectedImage !== null}
      onRequestClose={closeModal}
      contentLabel="Selected Image"
      shouldCloseOnOverlayClick={true}
      style={customStyles}
    >
      {selectedImage && (
        <div className={css.wrapper}>
          <img className={css.img} src={selectedImage.urls.regular} alt={selectedImage.alt_description}/>
          <div className={css.content}>
            <p>Author: {selectedImage.user.name}</p>
            <p>Likes: {selectedImage.likes}</p>
          </div>
          {selectedImage.description && <p>Description: {selectedImage.description}</p>}
        </div>
      )}
    </Modal>
  )
}

export default ImageModal
