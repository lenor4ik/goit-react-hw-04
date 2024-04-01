import css from "../LoadMoreBtn/LoadMoreBtn.module.css"

const LoadMoreBtn = ({ onClick }) => {
  return (
    <div className={css.LoadMoreBtnContainer}>
    <button className={css.LoadMoreBtn} onClick={onClick} type="button">
      Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
