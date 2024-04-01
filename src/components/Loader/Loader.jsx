import { Circles } from "react-loader-spinner"
import css from "../Loader/Loader.module.css"

const Loader = () => {
  return (
    <div className={css.loaderContainer}>
  <Circles
  height="30"
  width="30"
  color="grey"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
    />
    </div>
  )
}

export default Loader
