import { createContext, useEffect, useRef, useState } from 'react'
import './Post.css'
import Comment_page from './Comment_page'
import axios, { all } from "axios"
import { useNavigate } from 'react-router-dom'
function Post() {
    let [dots,setdots]=useState(<i className="fa-solid fa-ellipsis"></i>)
   let [option,setoption]=useState(false)
   let [data,setdata]=useState([])
   let [change_page,setchange_page]=useState(false)
   let [p,setp]=useState(false);
   let [m,setm]=useState(false)
   let [s,sets]=useState(false)
   let [id_save ,set_id_save]=useState("");
//    like counter


   function likeit(id){
            
           
        
            setp(!p)
            if(p){
                let all_dil=id;
            
                let li =all_dil.like;
                // console.log(all_dil,li)
                let newk ={
                    ...all_dil,
                    like:li,id:" "}
                    
                console.log(newk);
                axios.put(`http://localhost:3000/all_data_info_in_insta/${all_dil}`,newk)
                .then(res=>{alert("update")})
                like_counter.current.innerHTML=`33 <span>likes</span>`;
                // console.log(like_counter);
            }
            else{
                let all_dil=id;
            
                let li =all_dil.like;
                // console.log(all_dil,li)
                let newk ={
                    ...all_dil,
                    like:li+1,id:" "}
                    
                console.log(newk);
                axios.put(`http://localhost:3000/all_data_info_in_insta/${all_dil}`,newk)
                .then(res=>{alert("update")})
                // like_counter.current.innerHTML=`34 <span>likes</span>`;
                // console.log(like_counter);
            }
    }



// like counter end
   let Send_d =createContext()
   let like_counter =useRef("");
   let nav =useNavigate()
   
   function save(){
    sets(!s);
   }
   function message(){
    setm(!m)
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
   
    function viewComment(id){
   
       set_id_save(id)
        
        // console.log(id)
        // <Comment_page id={id_go_in_next_page}/>
        localStorage.setItem("commentid",JSON.stringify(id))
       setchange_page(true)
     

    }
    console.log("id save ",id_save)
    if(change_page){
       
        // nav('/comments',id_go_in_next_page)
         nav('/comments');
    }
    
    useEffect(()=>{
        axios.get("http://localhost:3000/all_data_info_in_insta")
        .then(res=>{
            // console.log(res)
            // console.log(res.data);
            setdata(res.data)
            // onChange()
    
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
                            <div onClick={()=>likeit(e)}>
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
    {/* {
       change_page && (
        <Send_d.Provider value={id_go_in_next_page} >
            <Comment_page/>
        </Send_d.Provider>
       ) 
    } */}
    {
        change_page&&<Comment_page idnumb={id_save} />
    }
    </>
  )
}

export default Post
