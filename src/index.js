import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './assets/index.scss'

import Apropos from './pages/APropos.js'
import Home from './pages/Home.js'
import Error from './pages/Error.js'
import AccomodationSheet from './pages/AccomodationSheet.js'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path={'/home'} element={<Home />} />
        <Route path={'/'} element={<Home />} />
        <Route path={'/a-propos'} element={<Apropos />} />
        <Route path={'/accomodationSheet'} element={<AccomodationSheet />} />
        <Route
          path={'/accomodationSheet/:id'}
          element={<AccomodationSheet />}
        />
        <Route path={'/error'} element={<Error />} />
        <Route path={'*'} element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
