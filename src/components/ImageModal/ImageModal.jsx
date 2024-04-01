import Modal from "react-modal"
import css from "../ImageModal/ImageModal.module.css"

const ImageModal = ({ selectedImage, closeModal}) => {
  return (
    <div className={css.darkOverlay}>
        <Modal 
        isOpen={selectedImage !== null}
        onRequestClose={closeModal}
        contentLabel="Selected Image"
        shouldCloseOnOverlayClick={true}
      >
        {selectedImage && (
          <div>
            <img src={selectedImage.urls.regular} alt={selectedImage.alt_description} />
            {/* <button onClick={closeModal}>Close</button> Кнопка для закриття модального вікна */}
          </div>
        )}
      </Modal>
    </div>
  )
}

export default ImageModal
