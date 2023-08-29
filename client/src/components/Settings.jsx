import styles from '../styles/Settings.module.sass'
import {useState} from 'react';
import {useParams} from 'react-router-dom'
import axios from '../axios';
function Settings({commentId, updateComments}){
    const {id} = useParams();
    const deleteComments = async(postId, commId) =>{
        try{
            const response = await axios.delete(`posts/${postId}/comments/${commId}`);
            if (response.status === 200) {
                console.log('Комментарий удален');
                const comments = JSON.parse(window.localStorage.getItem(`${postId}`))
                const findComment = comments.findIndex(comm => comm.id === commId);
                if (findComment !== -1) {
                    comments.splice(findComment, 1);
                    localStorage.setItem(`${postId}`, JSON.stringify(comments));
                    updateComments(comments)
                }
              } else {
                console.log('Ошибка при удалении комментария');
              }
        }catch(err){
            console.error('Ошибка при отправке запроса:', err);
        }
    }
    return (
    <div className={styles.settings}>
        <button>Ответить</button>
        <button onClick={() => deleteComments(id, commentId)}>Удалить</button>
    </div>)
}

export default Settings;