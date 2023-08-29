import {useState, useEffect, useRef, useCallback} from 'react';
import CommentsPost from './CommentsPost';
import styles from '../styles/Comments.module.sass'
import axios from '../axios'
import {useParams} from 'react-router-dom'
function Comments(){
    const inputRef = useRef();
    const {id} = useParams();
    const [comments, setComments] = useState([]);
    const updateComments = useCallback((value) => {
        setComments(value)
    })

    useEffect(() => {
        const savedComments = window.localStorage.getItem(`${id}`);
        if(savedComments){
            updateComments(JSON.parse(savedComments))
        }
    }, []);

    useEffect(() => {
        window.localStorage.setItem(`${id}`, JSON.stringify(comments));
    }, [comments]);

    const addComments = async(postId, newComment) =>{
        try{
            const response = await axios.post(`posts/${postId}/comments`, {postId: postId, comment: newComment});
            if (response.status === 200) {
                console.log('Комментарий добавлен к посту');
              } else {
                console.log('Ошибка при добавлении комментария');
              }
              const data = response.data.comments;
              setComments(prevState => [{comment: data.comment, id: data._id}, ...prevState])
        }catch(err){
            console.error('Ошибка при отправке запроса:', err);
        }
    }

    function newComments(e){
        e.preventDefault()
        const comment = inputRef.current.value.trim();
        if(comment.length > 0){
            addComments(id, comment)
            inputRef.current.value = '';
        }
    }
    
    return (
    <>
        <div className={styles.comments}>
            <img src='../img/img-1.jpg' alt='Аватар комментатора' />
            <div>
                <form >
                    <input type="text" placeholder="Напишите комментарий" ref={inputRef}/>
                    <button type="submit" onClick={newComments}>Опубликовать</button>
                </form>
            </div>
        </div>
        <CommentsPost comments={comments} updateComments={updateComments}/>
    </>
    )
}
export default Comments;