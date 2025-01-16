import { useEffect, useRef, useState } from 'react'
import './Post.css'
import Comment_page from './Comment_page'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
function Post() {
    let [dots,setdots]=useState(<i className="fa-solid fa-ellipsis"></i>)
   let [option,setoption]=useState(false)
   let [data,setdata]=useState([])
   let [change_page,setchange_page]=useState(false)



   let [p,setp]=useState(false);
   let [m,setm]=useState(false)
   let [s,sets]=useState(false)
   let like_counter =useRef("");
   let nav =useNavigate()
   
   function save(){
    sets(!s);
   }
   function message(){
    setm(!m)
   }
   function likeit(id){
    console.log(id)
    setp(!p)
    if(p){
        like_counter.current.innerHTML=`33 <span>likes</span>`;
        // console.log(like_counter);
    }
    else{
        like_counter.current.innerHTML=`34 <span>likes</span>`;
        // console.log(like_counter);
    }
}
    function closeit(){
        setdots(<i className="fa-solid fa-ellipsis"></i>)
        console.log(dots);
    }
    
    function changeIt(){
        setoption(!option)
        if(option){
            setdots(<i className="fa-solid fa-ellipsis"></i>)
        }
        else{
            setdots(
                <div className="in" onClick={closeit}>
                    <div className="box">
                        <p><span>Report</span></p>
                        <p><span>Unfollow</span></p>
                        <p>Add to favourites</p>
                        <p>Go to post</p>
                        <p>About this account</p>
                        <p onClick={closeit}>Cancel</p>
                       
                    </div>
                </div>
            )
           
        }
         
        
    }
    let id_go_in_next_page =null;
    function viewComment(id){
        console.log(id)
        id_go_in_next_page=id;
       setchange_page(true)
     

    }
    if(change_page){
        <Comment_page id={id_go_in_next_page}/>
        nav('/comments')
    }
    
    useEffect(()=>{
        axios.get("http://localhost:3000/all_data_info_in_insta")
        .then(res=>{
            console.log(res)
            console.log(res.data);
            setdata(res.data)
        })
    },[])
   
  return (
    <>

    <div className="Post">
        <div className="post_main">
           

            { 
            data.map((e,index)=>{

                return (

                    <div className="all_info" key={index}>
                    <div className="post_header">
                        <div className="user_info">
                            <img src={e.profile.meurl} alt="" />
                            <div className="username">
                                <p>{e.name}</p>
                                <span>{e.address}</span>
                            </div>
                        </div>
                        <div onClick={changeIt}>

                            {dots}
                        </div>
                    </div>

                    <div className="post_body">
                        <img src={e.status.imageurl} alt="" />
                    </div>

                    <div className="post_footer">
                        <div className="like">
                            <div className="message">
                            <div onClick={()=>likeit(e.id)}>
                                {(p)?<i  className="fa-solid fa-heart liked"></i>:<i className="fa-regular fa-heart"></i>}
                            </div>
                            <div onClick={message}>
                            {(m)?<i className="fa-solid fa-message messaged"></i>: <i className="fa-regular fa-message"></i>}
                            </div>
                            </div>
                        <div onClick={save}>
                            {(s)?<i className="fa-solid fa-bookmark saved"></i>:  <i className="fa-regular fa-bookmark"></i>}
                        </div>

                        </div>
                        <p ref={like_counter}>{e.like} <span>likes</span></p>
                        <h5 onClick={()=>viewComment(e.id)}>View all comments</h5>
                        <div className="input">
                            <input type="text" name='Comment' placeholder='Add a comment...' />
                            <i className="fa-regular fa-face-smile"></i>
                        </div>
                    </div>
                </div>

                )
            })
                
              }

            
            
        </div>
    </div>
    </>
  )
}

export default Post
