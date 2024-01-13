import styles from './Form.module.css'
import Button from '../LoginButton'
import Facebook from '../FacebookButton'
import Password from '../PasswordButton'
import Signup from '../SignupButton'

export default function Form() {
    return (
        <>
        <div className={styles.formOuterContainer}>
            <div className={styles.formContainer}>
                <form className={styles.form}>
                    <fieldset className={styles.fieldSet}>
                        <div className = {styles.forms}>
                            <legend>
                                <img className = {styles.instagramLogo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png" alt = "Instagram logo"/>
                            </legend>
                        </div>
                        <div>
                            <input
                                placeholder="Phone number, username, or email"
                                id="firstName"
                                className={styles.userInput}
                                type="text"
                                />
                        </div>
                        <div>
                            <input
                                placeholder="Password"
                                id="email"
                                className={styles.passwordInput}
                                type="email}"
                            /> 
                        </div>
                        
                            <div>
                                <Button/>
                            </div>

                        <div className={styles.break}>
                            <hr width="103px" size="1" color="#e5e5e5"/><span className={styles.or}>OR</span><hr width="103px" size="1" color="#e5e5e5"/>
                        </div>

            <div className={styles.facebookLogin}>
                <Facebook/>
            </div>
            <div>
                <Password/>
            </div>
                    </fieldset>
                </form>
            </div>
            <form>
                <div className={styles.signup}>
                    <p className={styles.noAccount}>Don't have an account?</p>
                    <Signup/>
                </div>

                <div className={styles.app}>
                    <span>Get the app.</span>
                </div>
            </form>
            <div className={styles.downloadButtons}>
                <img src="./Images/download_buttons.png"/>
            </div>
        </div>
        </>
    )
}