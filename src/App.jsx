import './App.css'
import './index.css'
import { Outlet } from 'react-router-dom'
import Navigation from './components/Navigation'

function App() {

  return (
    <>
      <Navigation />
      <div className='p-8'>
        <Outlet />
      </div>
    </>
  )
}

export default App
