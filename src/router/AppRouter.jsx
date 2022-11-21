import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../ui';
import { LoginPage } from '../auth';
import { DcPages, HeroesRoutes, MarvelPage } from '../heroes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
  return (
    <>    
      <Routes>

          <Route path='/login' element={
            <PublicRoute >
              <LoginPage />
            </PublicRoute>
          } />
          {/* <Route path='login' element={<LoginPage />} /> */}

          <Route path='/*' element={
            <PrivateRoute>
              <HeroesRoutes  />
            </PrivateRoute>
          } />

          {/* <Route path='/*' element={<HeroesRoutes />} /> */}
      </Routes>
    </>
  )
}
