import { Route, Routes } from "react-router-dom"
import Home_page from "./Home_page"
import Login from "./Login"
import SignUp_Form from "./SignUp_Form"
import Navbar from "./Navbar"
import Footer_navbar_in_page from "./Footer_navbar_in_page"
import Story from "./Story"
import Post from "./Post"
import Account_Home_page from "./Account_Home_page"
import Status_show from "./Status_show"
import Working_on_page from "./Working_on_page"
import Comment_page from "./Comment_page"
import Admin_login from './Admin_login'
import DashBoard from "./DashBoard"
function App() {
  return (
    <>
      {/* <SignUp_Form/> */}
      {/* <Login/> */}
      <Routes>
        <Route index element={<Login/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp_Form/>} />
        <Route path="/home" element={<Home_page/>}/>
        <Route path="/navbar" element={<Navbar/>} />
        <Route path="/footernavbar" element={<Footer_navbar_in_page/>} />
        <Route path="/story" element={<Story/>}/>
        <Route path="/post" element={<Post/>} />
        <Route path="/accountHome" element={<Account_Home_page/>} />
        <Route path="/status" element={<Status_show/>}/>
        <Route path="/working" element={<Working_on_page/>} />
        <Route path="/comments" element={<Comment_page/>} />

        <Route path="/admindas" element={<Admin_login/>}/>
        <Route path="/dashboard" element={<DashBoard/>} />
      </Routes>
      {/* <Home_page/> */}



    </>
  )
}

export default App
