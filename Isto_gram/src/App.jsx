import { Route, Routes } from "react-router-dom"
import Home_page from "./Home_page"
import Login from "./Login"
import SignUp_Form from "./SignUp_Form"


function App() {
  return (
    <>
      {/* <SignUp_Form/> */}
      {/* <Login/> */}
      <Routes>
        <Route path="/" element={<Home_page/>}>
        <Route index element={<Comment/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
