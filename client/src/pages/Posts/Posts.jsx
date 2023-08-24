import styles from './Posts.module.sass'
import NewAddPost from '../../components/NewAddPost'
import {Link} from 'react-router-dom';
function Posts({posts, chosenPost}){
    return (
    <>
    <div className={styles.list}>
        {posts.map(item =>{
            return (
            <Link to={`/popup/${item._id}`}> <img src={item.photos} onClick={() => chosenPost(item)} key={item._id}/></Link>
            )
        })}
    </div>
    <NewAddPost/>
    </>)
}
export default Posts