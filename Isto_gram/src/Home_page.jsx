import Account_Home_page from "./Account_Home_page"
import Comment_page from "./Comment_page"
import Navbar from "./Navbar"
import Post from "./Post"
import Status_show from "./Status_show"
import Story from "./Story"
import Working_on_page from "./Working_on_page"


function Home_page() {

  return (
    // <div className="main" style={{display:"flex",justifyContent:"center",alignContent:"center"}}>
    //     {/* <Navbar/> */}

    //     <div className="con" style={{border:"2px solid black",height:"auto",width:"60%" }}>

    //               <Story/>

    //       <Post/>
    //     </div>
    //    <div className="fa"> <Account_Home_page/></div>
    // </div>
    <Account_Home_page/>
    // <Post/>
    // <Comment_page/>
    // 
    // <Working_on_page/>
    // <Story/>
    // <Status_show/>
  )
}

export default Home_page
