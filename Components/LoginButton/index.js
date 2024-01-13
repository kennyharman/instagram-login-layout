import styles from './LoginButton.module.css'

export default function Button() {
    return (
        <button className={styles.button}>
            <div className={styles.buttonText}>Log in</div>
        </button>
    )
}