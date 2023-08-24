import styles from './Popup.module.sass';
import TextPost from '../../components/TextPost'
import Comments from '../../components/Comments'
import {useParams, useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from '../../axios';
import Backdrop from '../../components/Backdrop'
function Popup(){
    const [isHidden, setIsHidden] = useState(false)
    const [data, setData] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();
    function closePopup(){
        setIsHidden(true);
        navigate('/')
    }
    useEffect(() => {
        axios.get(`/posts/${id}`).then(res => {
            setData(res.data)
        }).catch(err => {
            console.warn(err);
            console.log('Ошибка при получении статьи')
        })
    }, [id])
    return (
        <>
        {!isHidden && (
          <>
           <Backdrop closePopup={closePopup}/>
            <div className={styles.popup}>
              <div className={styles.left}>
                <img src={data.photos} alt='Image'></img>
              </div>
              <div className={styles.right}>
                <TextPost thisData={data}/>
                <Comments thisData={data}/>
              </div>
            </div>
          </>
        )}
      </>
    )
}
export default Popup;