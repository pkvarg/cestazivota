import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './Home'
import Counter from './Counter'
import ScrollToTop from './components/ScrollToTop'
import { StateContext } from './context/StateContext'

import Section01 from './sections/Section01'
import Section02 from './sections/Section02'
import Section03 from './sections/Section03'
import Section04 from './sections/Section04'
import Section05 from './sections/Section05'

function App() {
  return (
    <BrowserRouter>
      <StateContext>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/counter' element={<Counter />} />
        </Routes>
        <ScrollToTop />
      </StateContext>
    </BrowserRouter>
  )
}

export default App
