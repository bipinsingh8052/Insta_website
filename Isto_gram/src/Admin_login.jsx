import { useRef, useState } from "react"
import './Login.css'
import { useNavigate } from "react-router-dom";


export default function Login() {
  let value=useRef("");
  let Secondvalue=useRef("");
  let [Click,setclick]=useState(false);
  let [nextpage,setnextpage]=useState(false);
  let [sign,setsign]=useState({
    email:"",
    password:""
  });
  let nav =useNavigate();
  function inputvalue(e){
   
    const {name,value}=e.target;
    setsign({
      ...sign,
      [name]:value
    });
  }
  if(Click){
    nav('/login')
  }


  function FromCheck(e){
    e.preventDefault();

    if(sign.email === ""){
        alert("Please fill the Email Id ");
        // value.current.focus();
      }
    else if (sign.password === ""){
        alert("Please the fill the Password");
        Secondvalue.current.focus();
      }
    else{
        setnextpage(true)
    }
    
    
    
  }
  if(nextpage){
    nav('/dashboard')
  }
  return (
    <>
     <div className="conatiner_login">
        <div className="form">
            <h1>Admin Login</h1>
            <form onSubmit={FromCheck} >
                <div className="email">
                    <label htmlFor="">Enter Email</label>
                    <input ref={value} type="email" name='email' value={sign.email} placeholder="Enter Email id" onChange={inputvalue} />
                </div>
               
                <div className="password">
                    <label htmlFor="">Enter Password</label>
                    <input ref={Secondvalue} type="password" name='password' value={sign.password} placeholder="Enter password" onChange={inputvalue} />
                </div>
               
                <div className="button">
                <button type="submit"> Sign in</button>
                <p>this is only Admin login page <span onClick={()=>{setclick(true)}}> Go_back</span> </p>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

