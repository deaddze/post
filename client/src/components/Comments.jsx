import {useState, useEffect} from 'react';
import CommentsPost from './CommentsPost';
import styles from '../styles/Comments.module.sass'
import data from '../data.post'
function Comments({thisData}){
    const [comments, setComments] = useState([]);
    const [inputComm, setInputComm] = useState('');
    function newComments(e){
        e.preventDefault()
        setComments((prevComm) => {
            return [...prevComm, inputComm]
        })
        // thisData.comments = comments;
        console.log(thisData.comments)
        setInputComm('');
    }
    useEffect(() =>{
        thisData.comments = comments;
    }, [comments])
    function commentHandler(e){
        setInputComm(e.target.value)
    }
    return (
    <>
        <div className={styles.comments}>
            <img src='../img/img-1.jpg' alt='Аватар комментатора' />
            <div>
                <form onSubmit={newComments}>
                    <input type="text" value={inputComm} onChange={commentHandler} placeholder="Напишите комментарий" />
                    <button type="submit" onClick={newComments}>Опубликовать</button>
                </form>
            </div>
        </div>
        <CommentsPost comments={thisData.comments}/>
    </>
    )
}
export default Comments;