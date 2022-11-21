import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../../ui'
import { DcPages, MarvelPage } from '../pages'
import { HeroPage } from '../pages/HeroPage'
import { SearchPage } from '../pages/SearchPage'

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar />
        <div className="container">
            <Routes>
                <Route path='/' element={<MarvelPage />} />
                <Route path='dc' element={<DcPages />} />
                <Route path='search' element={<SearchPage />} />
                <Route path='hero/:id' element={<HeroPage />} />
                <Route path='/' element={<Navbar to='/' /> } />
            </Routes>
        </div>
    </>
  )
}
