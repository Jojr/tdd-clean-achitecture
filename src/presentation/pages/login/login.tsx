import React from 'react'
import Styles from 'login-styles.scss'

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      Hello
      <header className={Styles.header}>
        <form className={Styles.form}></form>
        <footer className={Styles.footer}></footer>
      </header>
    </div>
  )
}

export default Login
