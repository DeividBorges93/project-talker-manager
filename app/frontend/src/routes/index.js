import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import Login from '../pages/Login'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={ <Navigate to="/login" /> } exact path="/" />
        <Route element={ <Login /> } path="/login" />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;