import UserNickname from './UserNickname'
import Settings from './Settings'
import styles from '../styles/CommentsPost.module.sass'
import styles1 from '../styles/UserNickname.module.sass'
function CommentsPost({comments}){
    return (
    <div className={styles.commentsPost}>
        <ul>
            {/* {comments.map((comm, index) => (
                <li key={index}>
                    <img src='../img/img-1.jpg' alt=""/>
                    <div className={styles1.avatar__text}>
                        <div>
                            <h2>login-4</h2>
                            <p>{comm}</p>
                        </div>
                        <Settings/>
                    </div>
                </li>
            ))} */}
        </ul>
    </div>)
}
export default CommentsPost;