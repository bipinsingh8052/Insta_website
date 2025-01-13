import Account_Home_page from "./Account_Home_page"
import Navbar from "./Navbar"
import Post from "./Post"
import Story from "./Story"


function Home_page() {
  return (
    <div>
        {/* <Navbar/> */}

        <Story/>

        <Post/>
        <Account_Home_page/>
    </div>
  )
}

export default Home_page
