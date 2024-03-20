import { AppLayout } from "./layout/app-layout"
import appRouter from "./routes/app-router"
import { Route, Routes } from "react-router-dom"
function App() {

  return (
   
    <Routes>
      <Route path="/" element={<AppLayout/>}>
        {appRouter.map(({component,id,path}) => (
        <Route path={path} element={component} key={id} index={path ? false : true}/>
        ))}
      </Route>
    </Routes>
  )
}

export default App
