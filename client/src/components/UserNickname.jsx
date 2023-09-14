import styles from '../styles/UserNickname.module.sass'
import Settings from './Settings'
import {useParams} from 'react-router-dom'
function UserNickname({thisData}){
    // const {id} = useParams();
    // const changeItem = async(postId, ) => {
    //     try{

    //     }catch(err){

    //     }
    
    return (
        <div className={styles.avatar__text}>
            <div>
                <h2>{thisData.login}</h2>
                <p>{thisData.description}</p>
            </div>
            <button>Изменить</button>
        </div>
    )
}
export default UserNickname;