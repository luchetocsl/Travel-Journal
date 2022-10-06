import React from "react"
import Entry from "./components/Entry"
import data from "./data"

import "./App.css"

export default function App() {
  const dataElements = data.map(location => {
      return <Entry
                key={location.id}
                location={location}
              />
  })
  
  
  return (
    <div className="App"> 
      {dataElements}
    </div>
  )
}
