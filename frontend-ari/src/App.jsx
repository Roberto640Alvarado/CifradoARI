import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from '/src/components/Card/CardViewDataC'
import CardConvert from '/src/components/Card/CardConvert'
import DecryptCard from './components/Card/CardDecryptC'
import './App.css'
import CardHome from './components/Card/CardHome'

function App() {
  const [count, setCount] = useState(0)

  return (
   /*<Card></Card>*/
   /*<DecryptCard></DecryptCard>*/
  <CardHome></CardHome>
  )
}

export default App
