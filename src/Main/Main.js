import Form from './Form'
import styles from './Main.module.css'

const Main = () => {
  return (
    <div className={styles.maindiv}>
              <Form user={{email: "endranikhil1029@gmail.com", password: "123456"}}/>  
    </div>
  )
}

export default Main