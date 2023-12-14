import ClipLoader from "react-spinners/ClipLoader";
import styles from './Loader.module.css'

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#36d7b7",
};

export const Loader = ({isLoading}) => {
  return (
    <div className={styles.loader_background}>
        <ClipLoader
        color='#36d7b7'
        loading={isLoading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}
