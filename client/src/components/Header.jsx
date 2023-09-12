import React from 'react'
import styles from '../styles/Header.module.sass'
import {Link} from 'react-router-dom';
const Header = () => {
  return (
    <div className={styles.header}>
        <img src='img/inst-icon.png'/>
        <Link to="/post">
        <button>Добавить пост</button>
        </Link>
    </div>
  )
}

export default Header