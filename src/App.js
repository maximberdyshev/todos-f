import './styles/App.css'
import React, { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthContext } from './context/MyContext'
import MyNavbar from './components/Navbar/MyNavbar'
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

  // имитация БД с задачами
  let [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Заголовок задачи 1',
      body: 'Описание задачи 1',
      dateEnd: '2022-10-10',
      dateCreate: '2022-01-01',
      dateUpdate: '2022-05-05',
      priority: 'средний',
      completed: false,
      initiator: 'Smith',
      executor: 'Smith',
    },
    {
      id: 2,
      title: 'Заголовок задачи 2',
      body: 'Описание задачи 2',
      dateEnd: '2022-07-01',
      dateCreate: '2022-01-22',
      dateUpdate: '2022-05-13',
      priority: 'средний',
      completed: false,
      initiator: 'Smith',
      executor: 'Smith',
    },
  ])

  const value = {
    isAuth,
    setIsAuth,
    userData,
    userDataDB,
    setUserData,
  }

  return (
    <div>
      <AuthContext.Provider value={value}>
        {localStorage.getItem('authorized', '1') ? (
          <div className='App'>
            <MyNavbar todos={todos} setTodos={setTodos} />
            <Routes>
              <Route
                path='/todo'
                element={<Todos todos={todos} setTodos={setTodos} />}
              />
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
