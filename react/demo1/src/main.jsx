import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import JsxDemo from './JsxDemo.jsx'
import ComponentsDemo from './ComponentsDemo.jsx'
import PropsDemo from './PropsDemo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>App: </h1>
    <App />
    <h1>JsxDemo: </h1>
    <JsxDemo />
    <h1>Components Demo: </h1>
    <ComponentsDemo />
    <h1>Props Demo: </h1>
    <PropsDemo />
  </StrictMode>,
)
// createRoot(document.getElementById('root')).render(
//   <h1>Hello React!</h1>
// )  