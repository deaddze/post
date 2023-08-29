import UserNickname from './UserNickname'
import Settings from './Settings'
import styles from '../styles/CommentsPost.module.sass'
import styles1 from '../styles/UserNickname.module.sass'
import {useEffect, useState} from 'react'
function CommentsPost({comments, updateComments}){
    return (
    <div className={styles.commentsPost}>
        <ul>
            {comments.map((comm) => (
                <li key={comm.id}>
                    <img src='../img/img-1.jpg' alt=""/>
                    <div className={styles1.avatar__text}>
                        <div>
                            <h2>login-4</h2>
                            <p>{comm.comment}</p>
                        </div>
                        <Settings commentId={comm.id} updateComments={updateComments}/>
                    </div>
                </li>
            ))}
        </ul>
    </div>)
}
export default CommentsPost;