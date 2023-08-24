import styles from '../styles/Container.module.sass'
function Container(props){
    return (
        <div className={styles.container}>
            {props.children}
        </div>
    )
}
export default Container;