import { Link } from 'react-router-dom'
import './Footer_navbar.css'
function Footer_navbar_in_page() {
  return (
    <div className='mini'>
      <div className="down">
            <ul>
            <li><Link to="/home" style={{ textDecoration: "none" ,color:"white"}}><i className="fa-solid fa-house"></i></Link></li>

            <li><Link to="/working" style={{ textDecoration: "none" ,color:"white"}}><i className="fa-solid fa-magnifying-glass"></i></Link></li>
            <li><Link to="/working" style={{ textDecoration: "none" ,color:"white"}}><i className="fa-solid fa-play"></i></Link></li>
            <li><Link to="/working" style={{ textDecoration: "none" ,color:"white"}}><i className="fa-regular fa-square-plus"></i></Link></li>
            <li><Link to="/working" style={{ textDecoration: "none" ,color:"white"}}><i className="fa-brands fa-facebook-messenger"></i></Link></li>
                <li><Link to="/working" style={{ textDecoration: "none" ,color:"white"}}>
                <div className="circle">
                    <img src="./half.jpg" alt="" />
                </div>
                </Link>
                </li>
                
            </ul>
        </div>
    </div>
  )
}

export default Footer_navbar_in_page
