import { useState } from 'react'
import './App.css'
import ArticleCards from './components/ArticleCards'
import CardComponent from './components/Card'
import Modalss from './components/Modals'
import Drawers from './components/Drawers'
import Tables from './components/Tables'
import Statistics from './components/Statistics'
import Navbar from './components/Navbar'
import Menus from './components/Menus'
import TagComponent from './components/Tag'
import MyComponent from './components/Rating'
import TooltipComponent from './components/Toolip'
import ProgressComponent from './components/Progress'
import DropdownComponent from './components/Dropdown'
 


function App() {
  return (
    <>
    <Navbar>
      Hey There im a cute simple Navbar 
    </Navbar>
    <br />
    <br />
       <Drawers/>
       <ArticleCards/>
      {/* <TagComponent/> */}
      {/* <MyComponent/> */}
      {/* <Menus/> */}
      {/* <Tables/> */}
      <ProgressComponent/>
      <Statistics/>
      {/* <TooltipComponent/> */}
      <DropdownComponent/>
      <Tables/>
   
    </>
  )
}

export default App
