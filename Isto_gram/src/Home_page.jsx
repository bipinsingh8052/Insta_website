import Account_Home_page from "./Account_Home_page"
import Comment_page from "./Comment_page"
import Footer_navbar_in_page from "./Footer_navbar_in_page"
import Navbar from "./Navbar"
import Post from "./Post"
import Status_show from "./Status_show"
import Story from "./Story"
import Working_on_page from "./Working_on_page"
import './Home_page.css'

function Home_page() {

  return (
    
    
   <>

   {/* <div className="Home_section_on_page">
      <div className="home_section_first">
          <div className="home_navbar">
          <Navbar/>
        
          </div>
          <div className="home_navbar_two">
          <Footer_navbar_in_page/>
          </div>
      </div>
    <div className="home_section_two">
        <Story/>
        <Post/>
    </div>
      <div className="home_section_three">
      <Account_Home_page/>
      </div>
   </div> */}
   <Comment_page/>
  
   
   
   
   </>
  )
}

export default Home_page
