import axios from '../../axios';
import styles from './PopupAddPost.module.sass'
import React, {useState, useRef, useEffect} from 'react';
import Backdrop from '../../components/Backdrop'
import {useNavigate} from 'react-router-dom';

function PopupAddPost(){
    const [isHidden, setIsHidden] = useState(false)
    const [imgData, setImgData] = useState('');
    const [text, setText] = useState('');
    const [selectedFile, setSelectedFile] = useState('')
    const navigate = useNavigate();
    function closePopup(){
        setIsHidden(true);
        navigate('/')
    }
    async function addFile(e){
        try{
            const file = e.target.files[0];
            const formData = new FormData();
            formData.append('image', file);
            const {data} = await axios.post('/upload', formData);
            setSelectedFile(file)
            setImgData(data.url)
            const reader = new FileReader();
            reader.onload = function (e) {
            setImgData(e.target.result);
            };
            reader.readAsDataURL(file);
        }catch(err){
            console.warn(err);
            alert('Ошибка загрузки файлов')
        }
    }
   
    async function createPost(e){
        try{
            e.preventDefault();
            const field = {
                photos: imgData,
                desrciption: text
            }
            const response = await axios.post('/post', field);
            if (response.status === 200) {
                console.log('Пост создан:', response.data);
            } else {
                console.log('Пост не создан, сервер не вернул данные:', response);
            }
        }catch(err){
            console.warn(err);
            alert('Ошибка при создании статьи')
        }
    }
    return (
    <div>
        {!isHidden &&(
        <>
        <Backdrop closePopup={closePopup}/>
        <div className={styles.popupAddPost}>
            <div className={styles.left}>
                <img src={{imgData}} alt="Загруженное изображение"/>
            </div>
            <div className={styles.right}>
                <form method="post" encType="multipart/form-data" onSubmit={createPost}>
                    <textarea placeholder="Напишите текст" value={text} onChange={(e) => setText(e.target.value)}></textarea>
                    <label className={styles['input-file']}>
                        <input type="file" name="file" onChange={addFile}/>
                        <span>Выберите файл</span>
                    </label>
                    <button type="submit">Опубликовать</button>
                </form>
            </div>
        </div>
        </>
    )}
    </div>
    )
}
export default PopupAddPost;