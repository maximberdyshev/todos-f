import React, { useContext } from 'react'
import { AuthContext } from '../../context/MyContext'
import MyButton from '../UI/button/MyButton'
import styles from './AuthWindow.module.css'

const AuthBtn = (props) => {
  const { userData, userDataDB, isAuth, setIsAuth, setUserData } =
    useContext(AuthContext)

  function getLogin(event) {
    event.preventDefault()

    // иммитация проверки авторизации пользователя
    if (
      userData.userLogin === userDataDB.userLogin &&
      userData.userPass === userDataDB.userPass
    ) {
      setIsAuth(!isAuth)
      localStorage.setItem('authorized', '1')
      localStorage.setItem('userName', userData.userLogin)
      setUserData({ userLogin: '', userPass: '' })
    } else {
      // сообщение о неудачном логине
      // не реализована вариативность (причина: неправильный пароль или логин)
      props.setLogState('Неудачный логин...')
      props.setModal(true)
    }
  }

  function regIn(event) {
    event.preventDefault()

    // должна быть реализована регистрация нового пользователя, но не реализовано
    props.setLogState('Окно регистрации пользователя. Не реализовано.')
    props.setModal(true)
  }

  return (
    <div>
      <form className={styles.authBtn}>
        <MyButton onClick={getLogin}>LogIn</MyButton>
        <MyButton onClick={regIn}>Register</MyButton>
      </form>
    </div>
  )
}

export default AuthBtn
