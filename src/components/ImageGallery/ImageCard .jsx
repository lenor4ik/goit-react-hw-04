import css from "../ImageGallery/ImageCard.module.css"

const ImageCard = ({ image }) => {
  return (
    <div >
      <img  className={css.ImageCard} src={image.urls.small} alt={image.alt_description} />
    </div>
  );
};

export default ImageCard;
