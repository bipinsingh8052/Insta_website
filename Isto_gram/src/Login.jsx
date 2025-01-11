import { useRef, useState } from "react"
import SignUp_Form from "./SignUp_Form";
import './Login.css'

import Home_page from "./Home_page";


export default function Login() {
  let value=useRef("");
  let Secondvalue=useRef("");
  let [Click,setclick]=useState(false);
  let [nextpage,setnextpage]=useState(false);
  let [sign,setsign]=useState({
    email:"",
    password:""
  });
  function inputvalue(e){
   
    const {name,value}=e.target;
    setsign({
      ...sign,
      [name]:value
    });
  }
  if(Click){
    return <SignUp_Form/>
  }


  function FromCheck(e){
    e.preventDefault();
    let localStorage_data =JSON.parse(localStorage.getItem("sign_data"));
    console.log(localStorage_data);
    if(sign.email === ""){
      alert("Please fill the Email Id ");
      // value.current.focus();
    }
    else if (!(sign.email=== localStorage_data.email) ){
      alert("Fill Right Email id ....!!!")
      value.current.focus();
    }
    else if (sign.password === ""){
      alert("Please the fill the Password");
      Secondvalue.current.focus();
    }
    else if(!(sign.password === localStorage_data.confirmpassword)){
      alert("Fill right Password ..!! ")
      Secondvalue.current.focus();
    }
    else{
      setnextpage(true)
    }
  }
  if(nextpage){
    return <Home_page/>
  }
  return (
    <>
     <div className="conatiner_login">
        <div className="form">
            <h1>Login</h1>
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
                <p>Don't have an account? <span onClick={()=>{setclick(true)}}>Sign Up</span></p>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

