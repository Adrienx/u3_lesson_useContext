import { useState, useContext } from "react"
import ComponentA from "./components/ComponentA"
import ComponentB from "./components/ComponentB"
import DataContext from "./DataContext"

function App() {
  // DATA TO BE PASSED BY PROVIDER
  const [userInfo, setUserInfo] = useState({
    name: "Jeremy",
    favColor: "blue",
    favFood: "chicken parmesean",
    favMovie: "Goodfellas",
  })

  return (
    <div className="App">
      <h2>React Context..using useContext</h2>
      <DataContext.Provider value={{ userInfo, setUserInfo }}>
        <ComponentA />
        <ComponentB />
      </DataContext.Provider>
    </div>
  )
}

export default App
