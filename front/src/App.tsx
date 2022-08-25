import ReactDOM from 'react-dom/client'
// import App from "./App";
import './index.css'
import { Routing } from './Routing'
import { StrictMode } from 'react'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <div className="text-gray-700">
      <Routing />
    </div>
  </StrictMode>
)
