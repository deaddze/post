import styles from './Posts.module.sass'
import NewAddPost from '../../components/NewAddPost'
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import {useEffect} from 'react'
import {fetchPosts} from '../../redux/slices/posts'
function Posts(){
    const dispatch = useDispatch()

    const posts = useSelector(state => state.posts.posts);
    const status = useSelector(state => state.posts.status);

    useEffect(() =>{
        dispatch(fetchPosts())
    }, []);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }
    return (
    <>
    <div className={styles.list}>
        {posts.map(post =>{
            return (
            <Link to={`/popup/${post._id}`}> <img src={post.photos} key={post._id}/></Link>
            )
        })}
    </div>
    <NewAddPost/>
    </>)
}
export default Posts