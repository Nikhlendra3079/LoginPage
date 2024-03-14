import Button from './Button'
import styles from './Form.module.css'
import {useState} from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import {useRef} from 'react'


const Form = ({user}) => {

    const [email, setEmail] = useState(user ? (user.email) : (""))
    const [password, setPassword] = useState(user ? (user.password) : (""))
    /**reCaptcha lógica */
    const [recaptcha, setReCaptcha] = useState(null)
    const [userRecaptcha, setUserRecaptcha] = useState(false)
    /** Password Eye Hide-Show */
    const [show, setShow] = useState(false)

    /** Password Eye Hide and Show */
    const eyePassword = () => {
        setShow(!show)
     }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
 
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email)
        console.log(password)
        // recaptcha
        if(captcha.current.getValue()) {
            console.log("The user is not a robot")
            if (email === "" || password === "") {
                setUserRecaptcha(false)
                setReCaptcha(false)
            }
            else {
            setUserRecaptcha(true)
            setReCaptcha(true)
            }
        } 
        else {
            console.log("Please, click on the reCaptcha")
            setUserRecaptcha(false)
            setReCaptcha(false)
            setEmail("")
            setPassword("")
        }

    }

    //recaptcha
    const captcha = useRef(null)

    const onChange = () => {
        if(captcha.current.getValue()) {
            console.log("The user is not a robot")
            setReCaptcha(true)
        }
    }

    /**ReCaptcha */
    /**CHAVE DO SITE: 6LcauJEgAAAAAEbLUseEtlQnNkAs620z2TRiH4mh */
    /**CHAVE SECRETA: 6LcauJEgAAAAADVWItC55-6zSTRMp5haRpqJ5Zal */
    /**comando: npm install --save react-google-recaptcha */

  return (
    <div className={styles.formlogin}>
        {!userRecaptcha && 
        <form onSubmit={handleSubmit}>
            <div className={styles.margin}>
                    <span className={styles.login_title}>Login</span>
                </div>
                <div>
                    <label>
                        <span>Email:</span>
                        <input 
                            type="email" 
                            name='email' 
                            placeholder='Please, enter with E-mail...' 
                            onChange={handleEmail}
                            value={email}
                        />
                    </label>
                    {email === "" &&
                        <div className={styles.email_verification}>                   
                            <p>Please, check your email</p>
                        </div>
                    }
                </div>
                <div>
                    <span>Password:</span>
                    <label  className={styles.label_password}>
                        <input className={styles.label_password}
                            type={show ? "text" : "password"} 
                            name='password' 
                            placeholder='Please, enter with your password...'
                            onChange={handlePassword} 
                            value={password}
                        />
                    {!show && 
                        <i className="bi bi-eye" onClick={eyePassword}></i> 
                    }
                    {show && 
                        <i className="bi bi-eye-slash" onClick={eyePassword}></i>
                    }
                    </label>
                    {password === "" && 
                        <div className={styles.password_verification}>
                            <p>Please, check your password</p>
                        </div>    
                    }
                    <Button type="submit" value="Log In"/>
                    <div className={styles.passacount}>
                       <a href="/">Forgot Password?</a>
                       <a href="/">Make an account</a>
                    </div>
                    <div>
                        <ReCAPTCHA 
                            ref={captcha}
                            sitekey='6LcauJEgAAAAAEbLUseEtlQnNkAs620z2TRiH4mh'
                            onChange={onChange}
                            className={styles.recaptcha}
                        />
                    </div>
                    {recaptcha === false &&
                    <div className={styles.error_captcha}>
                       <p>Please, click on the reCaptcha!</p>      
                    </div>
                    }
            </div>
        </form>
        }
        {userRecaptcha &&
          <div>
             <p>Welcome</p>
          </div>
        }
    </div>
  )
}

export default Form