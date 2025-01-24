// import {useEffect, useRef,useState} from 'react'
// import './Comment.css'
// // import {Send_d} from './Post'
// import axios from 'axios'
// import { useLocation, useNavigate } from 'react-router-dom'
// // import {send_d} from './Post'
// function Comment_page(props) {

//     // console.log("object oass sdfkjsafk",props);
    
//       let [change_page_post,set_change_page_post]=useState(false)
//       let [comment,setcomment]=useState('View all comments');
//       let [c_input,setc_input]=useState({
//         urlimg:"https://st5.depositphotos.com/18151330/64581/i/450/depositphotos_645817810-stock-photo-attractive-indian-man-smoker-exhales.jpg",
//         name:"bipin Singh",
//         comment:""
//       })
//       let [commentlike,setcommentlike]=useState(false)
//       let [New_comments,set_New_comments]=useState([])
//       let [api_data_p,set_api_data_p]=useState({})
//        let [p,setp]=useState(false);
//        let [m,setm]=useState(false)
//        let [s,sets]=useState(false)
     
//        let like_counter =useRef("");
//        let nav =useNavigate()
//        let loc =useLocation()
//        let id_go_in_next_page=loc.status||"";
       

//        console.log(id_go_in_next_page,"      main   id")
//     //    let [mess_all,set_mess_all]=useState([]);
//        let {idnumb}=props;
//        console.log("id number in new",idnumb);
//     //    id=1;
//     //    console.log(id);

//     //    let idname=useContext(Send_d)
//     //    console.log(idname);




//     // add data  all in there
//        function input_comment(e){
//         // e.preventDefault();
//         let {name,value}=e.target;
//         // console.log(name,value)
//         setc_input({
//             ...c_input,
//             [name]:value
//         })
//         // console.log(c_input.comments)
//        }

//        function submit_comment(e){
//         // count++;
//         e.preventDefault();
//         // console.log(c_input)
//         axios.post("http://localhost:3000/message",c_input)
//         .then(res=>alert("you comment it !!!!!"))
        
//     }
// // add data completed





//        function viewComment(){
//         setcomment(" ")
//        }
//        function save(){
//         sets(!s);
//        }
//        function message(){
//         setm(!m)
//        }
//        function likeit(){
        
//         setp(!p)
//         if(p){
//             like_counter.current.innerHTML='33 <span>likes</span>';
//             // console.log(like_counter);
//         }
//         else{
//             like_counter.current.innerHTML='34 <span>likes</span>';
//             // console.log(like_counter);
//         }
//     }
//         function closeit(){
//             // setdots(<i className="fa-solid fa-ellipsis"></i>)
//             // console.log(dots);
//         }
        

//         function close_back(){
//             set_change_page_post(true)

//         }
//         if(change_page_post){
//             // return<Post/>
//             nav('/home')
//         }
//         // let count=2;
       
//         // deleted comment

//         function Deleted(id){
//             // console.log(id)
//             axios.delete(`http://localhost:3000/message/${id}`)
//             .then((res)=>alert("Delete your comment ....."))
//         }
//         function likeComment(){
//             setcommentlike(!commentlike)
//         if(commentlike){
//             like_counter.current.innerHTML='33 <span>likes</span>';
//             // console.log(like_counter);
//         }
//         else{
//             like_counter.current.innerHTML='34 <span>likes</span>';
//             // console.log(like_counter);
//         }
//         }

//         let local_idi =JSON.parse(localStorage.getItem("commentid"));
//         console.log("local",local_idi)
//         // deleted comment
//         useEffect(()=>
//             {
//              axios.get(`http://localhost:3000/all_data_info_in_insta/${local_idi}`)
//             .then(res=>{
//                 console.log("data info",res.data)
//                 set_api_data_p(res.data)
//                 console.log(res.data)
//                 console.log(api_data_p.status.imageurl);  
//                 // post_image=res.data;
               
//             });
//           axios.get ("http://localhost:3000/message")
//             .then(re=>{
//                 // console.log("new data",re.data);
//                 set_New_comments(re.data)
//                 console.log(api_data_p)
//             });
//             // axios.get('http://localhost:3000/message')
//             // .then(res=>{
//             //     // console.log(res)
//             //     set_mess_all(res.data);
//             // })
//         },[Deleted,submit_comment])
//         // console.log(api_data_p,"all data")
//         // 
//         // console.log(api_data_p)
        

//         // console.log(post_image);
//         // // console.log(mess_all)
//         // console.log(api_data_p)
//         // if(!api_data_p){
//         //     return <p>Loading...</p>;
//         // }
        
        
//   return (
//     <>
    
//       <div className="comment_section">
//             <div className="main_section">
//                     <button onClick={close_back}><i className="fa-solid fa-xmark"></i></button>

//                  <div className='all_killer'>
//                        { 
                        
//                         <div className="image">
//                             <img src={api_data_p.status.imageurl} alt="" />
//                          </div>
                        
//                         }
//                     {/* <div className="comment_info">
//                         <div className="first">
//                             <div className="user_info">
//                                         <img src={api_data_p.profile.meurl} alt="" />
//                                         <div className="username">
//                                             <p>{api_data_p.name}</p>
//                                             <span>{api_data_p.address}</span>
//                                         </div>
//                             </div>
                                    
//                             <div>

//                             <i className="fa-solid fa-ellipsis"></i>
//                             </div>
//                         </div>
//                         <div className="messaging">
//                             <div className="mess">
                                

//                                 <div className="main_message">
//                                     <div className="info_all">
//                                                 <img src={api_data_p.messageinfo.urlimg} alt="" />
//                                                 <div className="para">
//                                                     <p>{api_data_p.messageinfo.name}</p>
//                                                     <span>{api_data_p.messageinfo.comment}</span>
//                                                     <h6> See Translation</h6>
//                                                 </div>
//                                     </div>
//                                 </div>


//                                 {
//                                     (api_data_p.messageinfo.user.urlimg!=" ")?<div className="first_message">
//                                     <div className="all_data">
//                                             <img src={api_data_p.messageinfo.user.urlimg} alt="" />
//                                         <div className="name">
//                                             <h5>{api_data_p.messageinfo.user.name}<span>{api_data_p.messageinfo.user.comment}</span></h5>
//                                             <h1><span>2h</span> <span>1 like</span> <span>delete</span></h1>
//                                         </div>
//                                     </div>
//                                     <div onClick={likeit}>
//                                         {(p)?<i  className="fa-solid fa-heart liked"></i>:<i className="fa-regular fa-heart"></i>}
//                                     </div>
//                                 </div>:"first "
//                                 }






                                
//                                 {
//                                     New_comments.map((e,index)=>{return (
//                                         <div className="first_message" key={index}>
//                                     <div className="all_data">
//                                             <img src={e.urlimg} alt="" />
//                                         <div className="name">
//                                             <h5>{e.name}<span>{e.comment}</span></h5>
//                                             <h1><span>2h</span> <span>1 like</span> <span onClick={()=>Deleted(e.id)}>delete</span></h1>
//                                         </div>
//                                     </div>
//                                     <div onClick={likeComment}>
//                                         {(commentlike)?<i  className="fa-solid fa-heart liked"></i>:<i className="fa-regular fa-heart"></i>}
//                                     </div>
//                                 </div>
//                                     )})
//                                 }

                               
//                             </div>

//                         </div>
//                         <div className="post_footer">
//                             <div className="like">
//                                 <div className="message">
//                                     <div onClick={likeit}>
//                                         {(p)?<i  className="fa-solid fa-heart liked"></i>:<i className="fa-regular fa-heart"></i>}
//                                     </div>
//                                     <div onClick={message}>
//                                         {(m)?<i className="fa-solid fa-message messaged"></i>: <i className="fa-regular fa-message"></i>}
//                                     </div>
//                                 </div>
//                             <div onClick={save}>
//                                     {(s)?<i className="fa-solid fa-bookmark saved"></i>:  <i className="fa-regular fa-bookmark"></i>}
//                                 </div>

//                             </div>
//                             <p ref={like_counter}>33 <span>likes</span></p>
//                             <h5 onClick={viewComment}>{comment}</h5>
//                             <div className="input" >
//                                 <form onSubmit={submit_comment} >
//                                     <i className="fa-regular fa-face-smile"></i>
//                                     <input type="text" name='comment' value={c_input.comment}  onChange={input_comment} placeholder='Add a comment...' />
//                                     <button type='submit'>Post</button>
//                                 </form>
                                
//                             </div>
//                         </div>

//                     </div> */}
//                 </div>
//              </div>
                
//         </div>
//     </>
//   )
// }

// export default Comment_page


import { useEffect, useRef, useState } from 'react';
import './Comment.css';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

function Comment_page(props) {

  let [change_page_post, set_change_page_post] = useState(false);
  let [comment, setcomment] = useState('View all comments');
  let [c_input, setc_input] = useState({
    urlimg: "https://st5.depositphotos.com/18151330/64581/i/450/depositphotos_645817810-stock-photo-attractive-indian-man-smoker-exhales.jpg",
    name: "bipin Singh",
    comment: ""
  });
  let [commentlike, setcommentlike] = useState(false);
  let [New_comments, set_New_comments] = useState([]);
  let [api_data_p, set_api_data_p] = useState({});
  let [p, setp] = useState(false);
  let [m, setm] = useState(false);
  let [s, sets] = useState(false);

  let like_counter = useRef("");
  let nav = useNavigate();
  let loc = useLocation();
  let id_go_in_next_page = loc.status || "";

  let { idnumb } = props;

  // Handle comment input change
  function input_comment(e) {
    let { name, value } = e.target;
    setc_input({
      ...c_input,
      [name]: value
    });
  }

  // Submit comment
  function submit_comment(e) {
    e.preventDefault();
    axios.post("http://localhost:3000/message", c_input)
      .then(res => alert("you commented it !!!!!"));
  }

  // View comments
  function viewComment() {
    setcomment(" ");
  }

  // Toggle save
  function save() {
    sets(!s);
  }

  // Toggle message
  function message() {
    setm(!m);
  }

  // Like/unlike functionality
  function likeit() {
    setp(!p);
    if (p) {
      like_counter.current.innerHTML = '33 <span>likes</span>';
    } else {
      like_counter.current.innerHTML = '34 <span>likes</span>';
    }
  }

  // Navigate back to home
  function close_back() {
    set_change_page_post(true);
  }

  if (change_page_post) {
    nav('/home');
  }

  // Delete comment
  function Deleted(id) {
    axios.delete(`http://localhost:3000/message/${id}`)
      .then((res) => alert("Deleted your comment ....."));
  }

  // Like/unlike comment
  function likeComment() {
    setcommentlike(!commentlike);
    if (commentlike) {
      like_counter.current.innerHTML = '33 <span>likes</span>';
    } else {
      like_counter.current.innerHTML = '34 <span>likes</span>';
    }
  }

  let local_idi = JSON.parse(localStorage.getItem("commentid"));
  console.log("local", local_idi);

  // Fetch data on component mount
  useEffect(() => {
    axios.get(`http://localhost:3000/all_data_info_in_insta/${local_idi}`)
      .then(res => {
        console.log("API response data", res.data);
        set_api_data_p(res.data);
      })
      .catch(error => {
        console.error("Error fetching data", error);
      });

    axios.get("http://localhost:3000/message")
      .then(re => {
        set_New_comments(re.data);
      });
  }, [Deleted, submit_comment]);

  return (
    <>
      <div className="comment_section">
        <div className="main_section">
          <button onClick={close_back}><i className="fa-solid fa-xmark"></i></button>

          <div className='all_killer'>
            {/* Check if api_data_p.status exists */}
            {
              api_data_p?.status?.imageurl ? (
                <div className="image">
                  <img src={api_data_p.status.imageurl} alt="Post" />
                </div>
              ) : (
                <p>Loading...</p>
              )
            }

            {/* Post and comment section */}
            <div className="comment_info">
              <div className="first">
                <div className="user_info">
                  <img src={api_data_p?.profile?.meurl || ""} alt="User" />
                  <div className="username">
                    <p>{api_data_p?.name || "Loading..."}</p>
                    <span>{api_data_p?.address || "Loading..."}</span>
                  </div>
                </div>
                <div>
                  <i className="fa-solid fa-ellipsis"></i>
                </div>
              </div>

              <div className="messaging">
                <div className="mess">
                  {
                    New_comments.map((e, index) => {
                      return (
                        <div className="first_message" key={index}>
                          <div className="all_data">
                            <img src={e.urlimg} alt="" />
                            <div className="name">
                              <h5>{e.name}<span>{e.comment}</span></h5>
                              <h1><span>2h</span> <span>1 like</span> <span onClick={() => Deleted(e.id)}>delete</span></h1>
                            </div>
                          </div>
                          <div onClick={likeComment}>
                            {(commentlike) ? <i className="fa-solid fa-heart liked"></i> : <i className="fa-regular fa-heart"></i>}
                          </div>
                        </div>
                      );
                    })
                  }
                </div>
              </div>

              <div className="post_footer">
                <div className="like">
                  <div className="message">
                    <div onClick={likeit}>
                      {(p) ? <i className="fa-solid fa-heart liked"></i> : <i className="fa-regular fa-heart"></i>}
                    </div>
                    <div onClick={message}>
                      {(m) ? <i className="fa-solid fa-message messaged"></i> : <i className="fa-regular fa-message"></i>}
                    </div>
                  </div>
                  <div onClick={save}>
                    {(s) ? <i className="fa-solid fa-bookmark saved"></i> : <i className="fa-regular fa-bookmark"></i>}
                  </div>
                </div>
                <p ref={like_counter}>33 <span>likes</span></p>
                <h5 onClick={viewComment}>{comment}</h5>
                <div className="input">
                  <form onSubmit={submit_comment}>
                    <i className="fa-regular fa-face-smile"></i>
                    <input type="text" name='comment' value={c_input.comment} onChange={input_comment} placeholder='Add a comment...' />
                    <button type='submit'>Post</button>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Comment_page;
