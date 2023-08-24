import Settings from './Settings'
import styles from '../styles/TextPost.module.sass';
import UserNickname from './UserNickname.jsx'
function TextPost({thisData}){
    return <div className={styles.post}>
        <img src={thisData.photos} alt=""/>
        <UserNickname thisData={thisData}/>
    </div>
}
export default TextPost;