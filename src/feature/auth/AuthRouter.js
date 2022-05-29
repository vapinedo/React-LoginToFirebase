import React from 'react'
import { LoginPage } from './pages/LoginPage'
import { Route, Routes } from 'react-router-dom'

export const AuthRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<LoginPage />} />
    </Routes>
  )
}
