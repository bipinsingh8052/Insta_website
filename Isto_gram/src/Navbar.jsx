import { useState } from 'react'
import Footer_navbar_in_page from './Footer_navbar_in_page'
import './Navbar.css'

function Navbar() {
    let [inputvalue,setinput]=useState({
        search:""
    });
    let [search,setsearch]=useState( <i className="fa-solid fa-magnifying-glass"></i>)
    function inputSearch(e){
        
        let {name, value}=e.target;
        if(value.length==1){
            setsearch("   ")
        }if(value.length ==0){
            setsearch(<i className="fa-solid fa-magnifying-glass"></i>)

        }
        setinput({
            ...inputvalue,
            [name]:value}
        )

    }
  return (
    <>
    <nav className='Main_navbar'> 
      <div className="logo">
      <h1>Instagram</h1>
      </div>
      <ul className='ul'>
        <li><div><i className="fa-solid fa-house"></i><span>Home</span></div></li>
        <li>
            <div><i className="fa-solid fa-magnifying-glass"></i><span>Search</span></div>
        </li>
        <li>
            <div><i className="fa-regular fa-compass"></i><span>Explore</span></div>
        </li>
        <li>
            <div><i className="fa-solid fa-play"></i><span>Reels</span></div>
        </li>
        <li>
            <div><i className="fa-brands fa-facebook-messenger"></i><span>Messages</span></div>
        </li>
        <li>
            <div><i className="fa-regular fa-heart"></i><span>Notifications</span></div>
        </li>
        <li>
            <div><i className="fa-regular fa-square-plus"></i><span>Create</span></div>
        </li>
        <li className='photo'>
            <div>
                <div className="circle">
                    <img src="./full.jpg" alt="" />
                </div><span>Profile</span></div>
        </li>
        <li>
            <div><i className="fa-solid fa-bars"></i><span>More</span></div>
        </li>
        
      </ul>

    </nav>

    <nav className="mini">
        <div className="upper">
            <h1>Instragram</h1>
            
                <div className="input">
                    <div className="input_main">
                    {search}
                    <input type="text" name='search' placeholder=' Search' value={inputvalue.search} onChange={inputSearch} />
                    </div>
                    <div className="message">
                        <i className="fa-regular fa-heart"></i>
                        </div>
                    </div>

                
            
          
        </div>
        {/* <main>

        </main> */}
        {/* <div className="down">
            <ul>
            <li><i className="fa-solid fa-house"></i></li>

            <li><i className="fa-solid fa-magnifying-glass"></i></li>
            <li><i className="fa-solid fa-play"></i></li>
            <li><i className="fa-regular fa-square-plus"></i></li>
            <li><i className="fa-brands fa-facebook-messenger"></i></li>
                <li>
                <div className="circle">
                    <img src="./half.jpg" alt="" />
                </div>
                </li>
                <li>

                </li>
            </ul>
        </div> */}
    </nav>
      
    </>
  )
}

export default Navbar
