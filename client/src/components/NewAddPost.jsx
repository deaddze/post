import styles from '../styles/NewAddPost.module.sass'
import {useState} from 'react'
import {Link} from 'react-router-dom'
function NewAddPost({isHidden}){
    return <div className={styles.newAddPost}>
        <Link to='/post' style={{height: '100%'}}>
        <button onClick={isHidden}>+</button>
        </Link>
    </div>
}
export default NewAddPost;