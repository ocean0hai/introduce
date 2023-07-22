import { useRoutes } from "react-router-dom"
import routes from "./router"
function App() {
  const element=useRoutes(routes)
  return (
    <div className="max-w-[80rem] mx-auto">
     {
      element
     }
    </div>
    
  )
}

export default App
