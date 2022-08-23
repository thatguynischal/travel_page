import React from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import data from './data'

const App = () => {
    const newCard= data.map((item) =>{
        return(
            <Card 
            item ={item}
            />
        )
    })
  return (
      <>
      <Navbar/>
      <div className='dont'>
      {newCard}
      </div>
      </>
    
  )
}

export default App