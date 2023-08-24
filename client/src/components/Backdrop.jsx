
import styles from '../styles/Backdrop.module.sass'
function Backdrop({closePopup}){
    return (
        <div className={styles.backdrop} onClick={closePopup}></div>
    )
}
export default Backdrop;