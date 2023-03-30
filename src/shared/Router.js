import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import Signup from 'src/pages/Signup'
import Login from 'src/pages/Login'
import Main from 'src/pages/Main'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Login />} />
        <Route path={'/signup'} element={<Signup />} />
        <Route path={'/main'} element={<Main />} />
      </Routes>
    </BrowserRouter>
  )

}
export default Router