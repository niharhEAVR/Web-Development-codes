import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const anotherElement = (
  <button>click me</button>
)

const text = "click me to visit google"

const reactElement = React.createElement(
  'a', // this is the react element or html tag
  { href: 'https://.com', target: '_blank' }, // these are the props or attribute of that react element
  text,
  anotherElement
)
// this is how actually react do all his work in behind

createRoot(document.getElementById('root')).render(
  <>
    {reactElement}
    < App />
  </>
)