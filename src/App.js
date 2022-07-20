import './styles/App.css'
import React, { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthContext } from './context/MyContext'
import Login from './pages/Login'
import Todos from './pages/Todos'
import Error from './pages/Error'

function App() {
  // состояние авторизации пользователя
  const [isAuth, setIsAuth] = useState(true)

  // имитация БД с логином и паролем
  // not used
  const [userDataDB] = useState({
    userLogin: 'Smith',
    userPass: '123',
  })

  // состояние для полей логина
  const [userData, setUserData] = useState({
    userLogin: '',
    userPass: '',
  })

  const authValue = {
    isAuth,
    setIsAuth,
    userData,
    userDataDB,
    setUserData,
  }

  return (
    <div>
      <AuthContext.Provider value={authValue}>
        {localStorage.getItem('authorized', '1') ? (
          <div className='App'>
            <Routes>
              <Route path='/todo' element={<Todos />} />
              <Route path='/error' element={<Error />} />
              <Route path='*' element={<Navigate to='/todo' />} />
            </Routes>
          </div>
        ) : (
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/error' element={<Error />} />
            <Route path='*' element={<Navigate to='/login' />} />
          </Routes>
        )}
      </AuthContext.Provider>
    </div>
  )
}

export default App
