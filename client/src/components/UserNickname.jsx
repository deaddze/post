import styles from '../styles/UserNickname.module.sass'
import Settings from './Settings'
function UserNickname({thisData}){
    return (
        <div className={styles.avatar__text}>
            <div>
                <h2>{thisData.login}</h2>
                <p>{thisData.description}</p>
            </div>
            <Settings/>
        </div>
    )
}
export default UserNickname;