import { useEffect, useState } from 'react'
import './SignUp_form.css'
import Login from './Login';
function SignUp_Form() {
    const [sign,setsign]=useState({
        username:"",
        email:"",
        mobile:"",
        password:"",
        confirmpassword:""
    })
    const [data,setdata]=useState(false);
    const inputvalue =(e)=>{
        let {name,value}=e.target
        setsign({
            ...sign,
            [name]:value
        });
    }
 
    const Submited=(e)=>{
        e.preventDefault();
        if(sign.username==""){
            alert("Please fill your name");
        }
        else if(!(sign.email.includes('@') && sign.email.includes(".com"))){

            alert("Please enter the email");
        }
        else if(sign.mobile.length !=10){
            alert("Please enter the number");
        }
        else if(sign.password ===""){
            alert("please fill the password")
        }
        else if(!(sign.password.match(/[1234567890]/)
        && sign.password.match(/[qwertyuiopasdfghjklzxcvbnm]/)
       && sign.password.match(/[QWERTYUIOPASDFGHJKLZXCVBNM]/)
       && sign.password.match(/[!@#$%^&*~``';]/)))
       {
            alert("Please enter the strong Password");
        }
        else if(!(sign.password == sign.confirmpassword)){
            // setsign.password=" ";
            // setsign.confirmpassword=" ";
            alert("please write again password")
        }
        else{
            localStorage.setItem("sign_data",JSON.stringify(sign))
            setdata(true);
        }

    }
    if(data){
        return <Login/>
    }



  return (
    <>
    <div className="conatiner">
        <div className="form"> 
            <h1>Sign Up</h1>
            <form onSubmit={Submited}>
                <div className="name">
                    <label htmlFor=""> Enter Name</label>
                    <input type="text"  name="username" value={sign.username} placeholder="Enter your Name" onChange={inputvalue}/>
                </div>
                <div className="email">
                    <label htmlFor="">Enter Email</label>
                    <input type="email" name='email' value={sign.email} placeholder="e.g. abcd90@gmail.com" onChange={inputvalue} />
                </div>
                <div className="moblie">
                    <label htmlFor="">Enter Number</label>
                    <input type="tel"name='mobile' value={sign.mobile} placeholder="e.g. 1234567890" onChange={inputvalue}/>
                </div>
                <div className="password">
                    <label htmlFor="">Enter Password</label>
                    <input type="password" name='password' value={sign.password} placeholder="Enter your password" onChange={inputvalue} />
                </div>
                <div className="confirmPassword">
                    <label htmlFor="">Enter Again Password</label>
                    <input type="password" name='confirmpassword' value={sign.confirmpassword} placeholder="Enter Confirm Password" onChange={inputvalue}/>
                </div>
                <button type="submit"> Submit</button>
            </form>
        </div>
    </div>
      
    </>
  )
}

export default SignUp_Form
