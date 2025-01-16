import { useState } from 'react'
import './Working_on_page.css'
import Home_page from './Home_page'
import Comment_page from './Comment_page'
import { useNavigate } from 'react-router-dom'
function Working_on_page() {
    let [close,setclose]=useState(false)
    let nav=useNavigate();
    function closebtn(){
        setclose(true)

    }
    if(close){
        nav('/home')
    }
  return (
    <>
      <div className="working">
        <div className="working_section">
            <div className="close">
            <i onClick={closebtn} className="fa-solid fa-xmark"></i>
            </div>
            <div className="card">
                <div className="heading">
                <h1>Working on this Page</h1>
                </div>
                <div className="body">
                    <img src="./working.jpg" alt="" />

                    <button onClick={closebtn}>Go to Back ?</button>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Working_on_page
