import { useState } from 'react'
import './App.css'
import ArticleCards from './components/ArticleCards'
import CardComponent from './components/Card'
import Modalss from './components/Modals'
import Drawers from './components/Drawers'
import Tables from './components/Tables'
 

function App() {
  return (
    <>
      {/* <ArticleCards/>
       <CardComponent/> */
      }
      {/* <Modalss/> */}
      {/* <Drawers/> */}
      <div style={{ margin: "8rem 0" }}>
					<Tables />
			</div>
    </>
  )
}

export default App
