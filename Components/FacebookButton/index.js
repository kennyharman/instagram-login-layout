import styles from './FacebookButton.module.css'

export default function Facebook() {
    return (
        <>
        <div className={styles.facebookLogin}>
        <img className={styles.facebookLogo} src="https://cdn-icons-png.flaticon.com/256/124/124010.png"/>
            <button className={styles.facebookButton}>Log in with Facebook</button>
        </div>
        </>
    )   
}