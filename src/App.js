import './styles/App.css'
import React, { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthContext } from './context/MyContext'
import Login from './pages/Login'
import Todos from './pages/Todos'
import Error from './pages/Error'

function App() {
  // состояние авторизации пользователя
  const [isAuth, setIsAuth] = useState(false)

  return (
    <div>
      <AuthContext.Provider value={{isAuth, setIsAuth}}>
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
