import styles from './Button.module.css'

const Button = ({type, value}) => {
  return (
    <div className={styles.button}>
        <input type={type} value={value} />
    </div>
  )
}

export default Button