import { useState } from "react"
import Layout from "./layout/index"
import LognPage from "./views/login/index"
function App() {
  const [isAuth,setIsAuth]= useState(true)

  return (
    <>
      {isAuth ? <><Layout>children</Layout></> : <LognPage onClick={()=>setIsAuth(true) } />}
    </>
  )
}

export default App
