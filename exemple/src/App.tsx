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

function App() {
  return (
    <>
    <Navbar>
      Heyy I have
      Heyy I have <br/>
      Heyy I have <br/>
      Heyy I have  <br/>
<br/>
      Heyy I have
    </Navbar>
       <ArticleCards/>
       {/* <CardComponent/>   */}
       
      <Modalss/>
      {/* <Drawers/> */}
      {/* <div style={{ margin: "8rem 0" }}>
					<Tables />
			</div> */}
{/*       
				<div style={{ margin: "8rem 0" }}>
					<Statistics />
				</div> */}
        {/* <Menus/> */}
    </>
  )
}

export default App
