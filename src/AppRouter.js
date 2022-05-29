import React from 'react'
import { AuthRouter } from './feature/auth/AuthRouter'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/*" element={<AuthRouter />} />
      </Routes>
    </BrowserRouter>
  )
}
