import { useRef, useState } from 'react'
import './Post.css'
function Post() {
    let [dots,setdots]=useState(<i className="fa-solid fa-ellipsis"></i>)
   let [option,setoption]=useState(false)
  let comment_page =useNav
  


   let [p,setp]=useState(false);
   let [m,setm]=useState(false)
   let [s,sets]=useState(false)
   let like_counter =useRef("");
  
   
   function save(){
    sets(!s);
   }
   function message(){
    setm(!m)
   }
   function likeit(){
    
    setp(!p)
    if(p){
        like_counter.current.innerHTML=`33 <span>likes</span>`;
        console.log(like_counter);
    }
    else{
        like_counter.current.innerHTML=`34 <span>likes</span>`;
        console.log(like_counter);
    }
}
    function closeit(){
        setdots(<i className="fa-solid fa-ellipsis"></i>)
        console.log(dots);
    }
    
    function changeIt(){
        setoption(!option)
        if(option){
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
        else{
            setdots(<i className="fa-solid fa-ellipsis"></i>)
        }
         
        
    }
   
  return (
    <>

    <div className="Post">
        <div className="post_main">
            <div className="all_info">
                <div className="post_header">
                    <div className="user_info">
                        <img src="./full.jpg" alt="" />
                        <div className="username">
                            <p>vicky_baba_98</p>
                            <span>Naini</span>
                        </div>
                    </div>
                    <i className="fa-solid fa-ellipsis"></i>
                </div>

                <div className="post_body">
                    <img src="./full.jpg" alt="" />
                </div>

                <div className="post_footer">
                    <div className="like">
                        <div className="message">
                        <i className="fa-regular fa-heart"></i>
                        <i className="fa-regular fa-comment"></i>
                        </div>
                        <i className="fa-regular fa-bookmark"></i>

                    </div>
                    <p>33 <span>likes</span></p>
                    <h5>View all comments</h5>
                    <div className="input">
                        <input type="text" name='Comment' placeholder='Add a comment...' />
                        <i className="fa-regular fa-face-smile"></i>
                    </div>
                </div>
            </div>

            <div className="all_info">
                <div className="post_header">
                    <div className="user_info">
                        <img src="./full.jpg" alt="" />
                        <div className="username">
                            <p>vicky_baba_98</p>
                            <span>Naini</span>
                        </div>
                    </div>
                    {/* {(dot_true)?{setdots}:{dots}} */}
                    <div onClick={changeIt}>

                        {dots}
                    </div>
                </div>

                <div className="post_body">
                    {/* <img src="./full.jpg" alt="" /> */}
                </div>

                <div className="post_footer">
                    <div className="like">
                        <div className="message">
                        <div onClick={likeit}>
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
                    <p ref={like_counter}>33 <span>likes</span></p>
                    <h5 onClick={viewComment}>View all comments</h5>
                    <div className="input">
                        <input type="text" name='Comment' placeholder='Add a comment...' />
                        <i className="fa-regular fa-face-smile"></i>
                    </div>
                </div>
            </div>

            <div className="all_info">
                <div className="post_header">
                    <div className="user_info">
                        <img src="./full.jpg" alt="" />
                        <div className="username">
                            <p>vicky_baba_98</p>
                            <span>Naini</span>
                        </div>
                    </div>
                    <i className="fa-solid fa-ellipsis"></i>
                </div>

                <div className="post_body">
                    <img src="./full.jpg" alt="" />
                </div>

                <div className="post_footer">
                    <div className="like">
                        <div className="message">
                        <i className="fa-regular fa-heart"></i>
                        <i className="fa-regular fa-comment"></i>
                        </div>
                        <i className="fa-regular fa-bookmark"></i>

                    </div>
                    <p>33 <span>likes</span></p>
                    <h5>View all comments</h5>
                    <div className="input">
                        <input type="text" name='Comment' placeholder='Add a comment...' />
                        <i className="fa-regular fa-face-smile"></i>
                    </div>
                </div>
            </div>

            <div className="all_info">
                <div className="post_header">
                    <div className="user_info">
                        <img src="./full.jpg" alt="" />
                        <div className="username">
                            <p>vicky_baba_98</p>
                            <span>Naini</span>
                        </div>
                    </div>
                    <i className="fa-solid fa-ellipsis"></i>
                </div>

                <div className="post_body">
                    <img src="./full.jpg" alt="" />
                </div>

                <div className="post_footer">
                    <div className="like">
                        <div className="message">
                        <i className="fa-regular fa-heart"></i>
                        <i className="fa-regular fa-comment"></i>
                        </div>
                        <i className="fa-regular fa-bookmark"></i>

                    </div>
                    <p>33 <span>likes</span></p>
                    <h5>View all comments</h5>
                    <div className="input">
                        <input type="text" name='Comment' placeholder='Add a comment...' />
                        <i className="fa-regular fa-face-smile"></i>
                    </div>
                </div>
            </div>

            <div className="all_info">
                <div className="post_header">
                    <div className="user_info">
                        <img src="./full.jpg" alt="" />
                        <div className="username">
                            <p>vicky_baba_98</p>
                            <span>Naini</span>
                        </div>
                    </div>
                    <i className="fa-solid fa-ellipsis"></i>
                </div>

                <div className="post_body">
                    <img src="./full.jpg" alt="" />
                </div>

                <div className="post_footer">
                    <div className="like">
                        <div className="message">
                        <i className="fa-regular fa-heart"></i>
                        <i className="fa-regular fa-comment"></i>
                        </div>
                        <i className="fa-regular fa-bookmark"></i>

                    </div>
                    <p>33 <span>likes</span></p>
                    <h5>View all comments</h5>
                    <div className="input">
                        <input type="text" name='Comment' placeholder='Add a comment...' />
                        <i className="fa-regular fa-face-smile"></i>
                    </div>
                </div>
            </div>

            <div className="all_info">
                <div className="post_header">
                    <div className="user_info">
                        <img src="./full.jpg" alt="" />
                        <div className="username">
                            <p>vicky_baba_98</p>
                            <span>Naini</span>
                        </div>
                    </div>
                    <i className="fa-solid fa-ellipsis"></i>
                </div>

                <div className="post_body">
                    <img src="./full.jpg" alt="" />
                </div>

                <div className="post_footer">
                    <div className="like">
                        <div className="message">
                        <i className="fa-regular fa-heart"></i>
                        <i className="fa-regular fa-comment"></i>
                        </div>
                        <i className="fa-regular fa-bookmark"></i>

                    </div>
                    <p>33 <span>likes</span></p>
                    <h5>View all comments</h5>
                    <div className="input">
                        <input type="text" name='Comment' placeholder='Add a comment...' />
                        <i className="fa-regular fa-face-smile"></i>
                    </div>
                </div>
            </div>

            <div className="all_info">
                <div className="post_header">
                    <div className="user_info">
                        <img src="./full.jpg" alt="" />
                        <div className="username">
                            <p>vicky_baba_98</p>
                            <span>Naini</span>
                        </div>
                    </div>
                    <i className="fa-solid fa-ellipsis"></i>
                </div>

                <div className="post_body">
                    <img src="./full.jpg" alt="" />
                </div>

                <div className="post_footer">
                    <div className="like">
                        <div className="message">
                        <i className="fa-regular fa-heart"></i>
                        <i className="fa-regular fa-comment"></i>
                        </div>
                        <i className="fa-regular fa-bookmark"></i>

                    </div>
                    <p>33 <span>likes</span></p>
                    <h5>View all comments</h5>
                    <div className="input">
                        <input type="text" name='Comment' placeholder='Add a comment...' />
                        <i className="fa-regular fa-face-smile"></i>
                    </div>
                </div>
            </div>

            <div className="all_info">
                <div className="post_header">
                    <div className="user_info">
                        <img src="./full.jpg" alt="" />
                        <div className="username">
                            <p>vicky_baba_98</p>
                            <span>Naini</span>
                        </div>
                    </div>
                    <i className="fa-solid fa-ellipsis"></i>
                </div>

                <div className="post_body">
                    <img src="./full.jpg" alt="" />
                </div>

                <div className="post_footer">
                    <div className="like">
                        <div className="message">
                        <i className="fa-regular fa-heart"></i>
                        <i className="fa-regular fa-comment"></i>
                        </div>
                        <i className="fa-regular fa-bookmark"></i>

                    </div>
                    <p>33 <span>likes</span></p>
                    <h5>View all comments</h5>
                    <div className="input">
                        <input type="text" name='Comment' placeholder='Add a comment...' />
                        <i className="fa-regular fa-face-smile"></i>
                    </div>
                </div>
            </div>

            <div className="all_info">
                <div className="post_header">
                    <div className="user_info">
                        <img src="./full.jpg" alt="" />
                        <div className="username">
                            <p>vicky_baba_98</p>
                            <span>Naini</span>
                        </div>
                    </div>
                    <i className="fa-solid fa-ellipsis"></i>
                </div>

                <div className="post_body">
                    <img src="./full.jpg" alt="" />
                </div>

                <div className="post_footer">
                    <div className="like">
                        <div className="message">
                        <i className="fa-regular fa-heart"></i>
                        <i className="fa-regular fa-comment"></i>
                        </div>
                        <i className="fa-regular fa-bookmark"></i>

                    </div>
                    <p>33 <span>likes</span></p>
                    <h5>View all comments</h5>
                    <div className="input">
                        <input type="text" name='Comment' placeholder='Add a comment...' />
                        <i className="fa-regular fa-face-smile"></i>
                    </div>
                </div>
            </div>

            <div className="all_info">
                <div className="post_header">
                    <div className="user_info">
                        <img src="./full.jpg" alt="" />
                        <div className="username">
                            <p>vicky_baba_98</p>
                            <span>Naini</span>
                        </div>
                    </div>
                    <i className="fa-solid fa-ellipsis"></i>
                </div>

                <div className="post_body">
                    <img src="./full.jpg" alt="" />
                </div>

                <div className="post_footer">
                    <div className="like">
                        <div className="message">
                        <i className="fa-regular fa-heart"></i>
                        <i className="fa-regular fa-comment"></i>
                        </div>
                        <i className="fa-regular fa-bookmark"></i>

                    </div>
                    <p>33 <span>likes</span></p>
                    <h5>View all comments</h5>
                    <div className="input">
                        <input type="text" name='Comment' placeholder='Add a comment...' />
                        <i className="fa-regular fa-face-smile"></i>
                    </div>
                </div>
            </div>

            <div className="all_info">
                <div className="post_header">
                    <div className="user_info">
                        <img src="./full.jpg" alt="" />
                        <div className="username">
                            <p>vicky_baba_98</p>
                            <span>Naini</span>
                        </div>
                    </div>
                    <i className="fa-solid fa-ellipsis"></i>
                </div>

                <div className="post_body">
                    <img src="./full.jpg" alt="" />
                </div>

                <div className="post_footer">
                    <div className="like">
                        <div className="message">
                        <i className="fa-regular fa-heart"></i>
                        <i className="fa-regular fa-comment"></i>
                        </div>
                        <i className="fa-regular fa-bookmark"></i>

                    </div>
                    <p>33 <span>likes</span></p>
                    <h5>View all comments</h5>
                    <div className="input">
                        <input type="text" name='Comment' placeholder='Add a comment...' />
                        <i className="fa-regular fa-face-smile"></i>
                    </div>
                </div>
            </div>

            <div className="all_info">
                <div className="post_header">
                    <div className="user_info">
                        <img src="./full.jpg" alt="" />
                        <div className="username">
                            <p>vicky_baba_98</p>
                            <span>Naini</span>
                        </div>
                    </div>
                    <i className="fa-solid fa-ellipsis"></i>
                </div>

                <div className="post_body">
                    <img src="./full.jpg" alt="" />
                </div>

                <div className="post_footer">
                    <div className="like">
                        <div className="message">
                        <i className="fa-regular fa-heart"></i>
                        <i className="fa-regular fa-comment"></i>
                        </div>
                        <i className="fa-regular fa-bookmark"></i>

                    </div>
                    <p>33 <span>likes</span></p>
                    <h5>View all comments</h5>
                    <div className="input">
                        <input type="text" name='Comment' placeholder='Add a comment...' />
                        <i className="fa-regular fa-face-smile"></i>
                    </div>
                </div>
            </div>

            <div className="all_info">
                <div className="post_header">
                    <div className="user_info">
                        <img src="./full.jpg" alt="" />
                        <div className="username">
                            <p>vicky_baba_98</p>
                            <span>Naini</span>
                        </div>
                    </div>
                    <i className="fa-solid fa-ellipsis"></i>
                </div>

                <div className="post_body">
                    <img src="./full.jpg" alt="" />
                </div>

                <div className="post_footer">
                    <div className="like">
                        <div className="message">
                        <i className="fa-regular fa-heart"></i>
                        <i className="fa-regular fa-comment"></i>
                        </div>
                        <i className="fa-regular fa-bookmark"></i>

                    </div>
                    <p>33 <span>likes</span></p>
                    <h5>View all comments</h5>
                    <div className="input">
                        <input type="text" name='Comment' placeholder='Add a comment...' />
                        <i className="fa-regular fa-face-smile"></i>
                    </div>
                </div>
            </div>

            <div className="all_info">
                <div className="post_header">
                    <div className="user_info">
                        <img src="./full.jpg" alt="" />
                        <div className="username">
                            <p>vicky_baba_98</p>
                            <span>Naini</span>
                        </div>
                    </div>
                    <i className="fa-solid fa-ellipsis"></i>
                </div>

                <div className="post_body">
                    <img src="./full.jpg" alt="" />
                </div>

                <div className="post_footer">
                    <div className="like">
                        <div className="message">
                        <i className="fa-regular fa-heart"></i>
                        <i className="fa-regular fa-comment"></i>
                        </div>
                        <i className="fa-regular fa-bookmark"></i>

                    </div>
                    <p>33 <span>likes</span></p>
                    <h5>View all comments</h5>
                    <div className="input">
                        <input type="text" name='Comment' placeholder='Add a comment...' />
                        <i className="fa-regular fa-face-smile"></i>
                    </div>
                </div>
            </div>

            <div className="all_info">
                <div className="post_header">
                    <div className="user_info">
                        <img src="./full.jpg" alt="" />
                        <div className="username">
                            <p>vicky_baba_98</p>
                            <span>Naini</span>
                        </div>
                    </div>
                    <i className="fa-solid fa-ellipsis"></i>
                </div>

                <div className="post_body">
                    <img src="./full.jpg" alt="" />
                </div>

                <div className="post_footer">
                    <div className="like">
                        <div className="message">
                        <i className="fa-regular fa-heart"></i>
                        <i className="fa-regular fa-comment"></i>
                        </div>
                        <i className="fa-regular fa-bookmark"></i>

                    </div>
                    <p>33 <span>likes</span></p>
                    <h5>View all comments</h5>
                    <div className="input">
                        <input type="text" name='Comment' placeholder='Add a comment...' />
                        <i className="fa-regular fa-face-smile"></i>
                    </div>
                </div>
            </div>

            <div className="all_info">
                <div className="post_header">
                    <div className="user_info">
                        <img src="./full.jpg" alt="" />
                        <div className="username">
                            <p>vicky_baba_98</p>
                            <span>Naini</span>
                        </div>
                    </div>
                    <i className="fa-solid fa-ellipsis"></i>
                </div>

                <div className="post_body">
                    <img src="./full.jpg" alt="" />
                </div>

                <div className="post_footer">
                    <div className="like">
                        <div className="message">
                        <i className="fa-regular fa-heart"></i>
                        <i className="fa-regular fa-comment"></i>
                        </div>
                        <i className="fa-regular fa-bookmark"></i>

                    </div>
                    <p>33 <span>likes</span></p>
                    <h5>View all comments</h5>
                    <div className="input">
                        <input type="text" name='Comment' placeholder='Add a comment...' />
                        <i className="fa-regular fa-face-smile"></i>
                    </div>
                </div>
            </div>

            <div className="all_info">
                <div className="post_header">
                    <div className="user_info">
                        <img src="./full.jpg" alt="" />
                        <div className="username">
                            <p>vicky_baba_98</p>
                            <span>Naini</span>
                        </div>
                    </div>
                    <i className="fa-solid fa-ellipsis"></i>
                </div>

                <div className="post_body">
                    <img src="./full.jpg" alt="" />
                </div>

                <div className="post_footer">
                    <div className="like">
                        <div className="message">
                        <i className="fa-regular fa-heart"></i>
                        <i className="fa-regular fa-comment"></i>
                        </div>
                        <i className="fa-regular fa-bookmark"></i>

                    </div>
                    <p>33 <span>likes</span></p>
                    <h5>View all comments</h5>
                    <div className="input">
                        <input type="text" name='Comment' placeholder='Add a comment...' />
                        <i className="fa-regular fa-face-smile"></i>
                    </div>
                </div>
            </div>

            <div className="all_info">
                <div className="post_header">
                    <div className="user_info">
                        <img src="./full.jpg" alt="" />
                        <div className="username">
                            <p>vicky_baba_98</p>
                            <span>Naini</span>
                        </div>
                    </div>
                    <i className="fa-solid fa-ellipsis"></i>
                </div>

                <div className="post_body">
                    <img src="./full.jpg" alt="" />
                </div>

                <div className="post_footer">
                    <div className="like">
                        <div className="message">
                        <i className="fa-regular fa-heart"></i>
                        <i className="fa-regular fa-comment"></i>
                        </div>
                        <i className="fa-regular fa-bookmark"></i>

                    </div>
                    <p>33 <span>likes</span></p>
                    <h5>View all comments</h5>
                    <div className="input">
                        <input type="text" name='Comment' placeholder='Add a comment...' />
                        <i className="fa-regular fa-face-smile"></i>
                    </div>
                </div>
            </div>

             <div className="all_info">
                <div className="post_header">
                    <div className="user_info">
                        <img src="./full.jpg" alt="" />
                        <div className="username">
                            <p>vicky_baba_98</p>
                            <span>Naini</span>
                        </div>
                    </div>
                    <i className="fa-solid fa-ellipsis"></i>
                </div>

                <div className="post_body">
                    <img src="./full.jpg" alt="" />
                </div>

                <div className="post_footer">
                    <div className="like">
                        <div className="message">
                        <i className="fa-regular fa-heart"></i>
                        <i className="fa-regular fa-comment"></i>
                        </div>
                        <i className="fa-regular fa-bookmark"></i>

                    </div>
                    <p>33 <span>likes</span></p>
                    <h5>View all comments</h5>
                    <div className="input">
                        <input type="text" name='Comment' placeholder='Add a comment...' />
                        <i className="fa-regular fa-face-smile"></i>
                    </div>
                </div>
            </div>

            <div className="all_info">
                <div className="post_header">
                    <div className="user_info">
                        <img src="./full.jpg" alt="" />
                        <div className="username">
                            <p>vicky_baba_98</p>
                            <span>Naini</span>
                        </div>
                    </div>
                    <i className="fa-solid fa-ellipsis"></i>
                </div>

                <div className="post_body">
                    <img src="./full.jpg" alt="" />
                </div>

                <div className="post_footer">
                    <div className="like">
                        <div className="message">
                        <i className="fa-regular fa-heart"></i>
                        <i className="fa-regular fa-comment"></i>
                        </div>
                        <i className="fa-regular fa-bookmark"></i>

                    </div>
                    <p>33 <span>likes</span></p>
                    <h5>View all comments</h5>
                    <div className="input">
                        <input type="text" name='Comment' placeholder='Add a comment...' />
                        <i className="fa-regular fa-face-smile"></i>
                    </div>
                </div>
            </div>

            <div className="all_info">
                <div className="post_header">
                    <div className="user_info">
                        <img src="./full.jpg" alt="" />
                        <div className="username">
                            <p>vicky_baba_98</p>
                            <span>Naini</span>
                        </div>
                    </div>
                    <i className="fa-solid fa-ellipsis"></i>
                </div>

                <div className="post_body">
                    <img src="./full.jpg" alt="" />
                </div>

                <div className="post_footer">
                    <div className="like">
                        <div className="message">
                        <i className="fa-regular fa-heart"></i>
                        <i className="fa-regular fa-comment"></i>
                        </div>
                        <i className="fa-regular fa-bookmark"></i>

                    </div>
                    <p>33 <span>likes</span></p>
                    <h5>View all comments</h5>
                    <div className="input">
                        <input type="text" name='Comment' placeholder='Add a comment...' />
                        <i className="fa-regular fa-face-smile"></i>
                    </div>
                </div>
            </div>

            <div className="all_info">
                <div className="post_header">
                    <div className="user_info">
                        <img src="./full.jpg" alt="" />
                        <div className="username">
                            <p>vicky_baba_98</p>
                            <span>Naini</span>
                        </div>
                    </div>
                    <i className="fa-solid fa-ellipsis"></i>
                </div>

                <div className="post_body">
                    <img src="./full.jpg" alt="" />
                </div>

                <div className="post_footer">
                    <div className="like">
                        <div className="message">
                        <i className="fa-regular fa-heart"></i>
                        <i className="fa-regular fa-comment"></i>
                        </div>
                        <i className="fa-regular fa-bookmark"></i>

                    </div>
                    <p>33 <span>likes</span></p>
                    <h5>View all comments</h5>
                    <div className="input">
                        <input type="text" name='Comment' placeholder='Add a comment...' />
                        <i className="fa-regular fa-face-smile"></i>
                    </div>
                </div>
            </div>

            <div className="all_info">
                <div className="post_header">
                    <div className="user_info">
                        <img src="./full.jpg" alt="" />
                        <div className="username">
                            <p>vicky_baba_98</p>
                            <span>Naini</span>
                        </div>
                    </div>
                    <i className="fa-solid fa-ellipsis"></i>
                </div>

                <div className="post_body">
                    <img src="./full.jpg" alt="" />
                </div>

                <div className="post_footer">
                    <div className="like">
                        <div className="message">
                        <i className="fa-regular fa-heart"></i>
                        <i className="fa-regular fa-comment"></i>
                        </div>
                        <i className="fa-regular fa-bookmark"></i>

                    </div>
                    <p>33 <span>likes</span></p>
                    <h5>View all comments</h5>
                    <div className="input">
                        <input type="text" name='Comment' placeholder='Add a comment...' />
                        <i className="fa-regular fa-face-smile"></i>
                    </div>
                </div>
            </div>

            <div className="all_info">
                <div className="post_header">
                    <div className="user_info">
                        <img src="./full.jpg" alt="" />
                        <div className="username">
                            <p>vicky_baba_98</p>
                            <span>Naini</span>
                        </div>
                    </div>
                    <i className="fa-solid fa-ellipsis"></i>
                </div>

                <div className="post_body">
                    <img src="./full.jpg" alt="" />
                </div>

                <div className="post_footer">
                    <div className="like">
                        <div className="message">
                        <i className="fa-regular fa-heart"></i>
                        <i className="fa-regular fa-comment"></i>
                        </div>
                        <i className="fa-regular fa-bookmark"></i>

                    </div>
                    <p>33 <span>likes</span></p>
                    <h5>View all comments</h5>
                    <div className="input">
                        <input type="text" name='Comment' placeholder='Add a comment...' />
                        <i className="fa-regular fa-face-smile"></i>
                    </div>
                </div>
            </div>

            <div className="all_info">
                <div className="post_header">
                    <div className="user_info">
                        <img src="./full.jpg" alt="" />
                        <div className="username">
                            <p>vicky_baba_98</p>
                            <span>Naini</span>
                        </div>
                    </div>
                    <i className="fa-solid fa-ellipsis"></i>
                </div>

                <div className="post_body">
                    <img src="./full.jpg" alt="" />
                </div>

                <div className="post_footer">
                    <div className="like">
                        <div className="message">
                        <i className="fa-regular fa-heart"></i>
                        <i className="fa-regular fa-comment"></i>
                        </div>
                        <i className="fa-regular fa-bookmark"></i>

                    </div>
                    <p>33 <span>likes</span></p>
                    <h5>View all comments</h5>
                    <div className="input">
                        <input type="text" name='Comment' placeholder='Add a comment...' />
                        <i className="fa-regular fa-face-smile"></i>
                    </div>
                </div>
            </div>

            <div className="all_info">
                <div className="post_header">
                    <div className="user_info">
                        <img src="./full.jpg" alt="" />
                        <div className="username">
                            <p>vicky_baba_98</p>
                            <span>Naini</span>
                        </div>
                    </div>
                    <i className="fa-solid fa-ellipsis"></i>
                </div>

                <div className="post_body">
                    <img src="./full.jpg" alt="" />
                </div>

                <div className="post_footer">
                    <div className="like">
                        <div className="message">
                        <i className="fa-regular fa-heart"></i>
                        <i className="fa-regular fa-comment"></i>
                        </div>
                        <i className="fa-regular fa-bookmark"></i>

                    </div>
                    <p>33 <span>likes</span></p>
                    <h5>View all comments</h5>
                    <div className="input">
                        <input type="text" name='Comment' placeholder='Add a comment...' />
                        <i className="fa-regular fa-face-smile"></i>
                    </div>
                </div>
            </div>

            <div className="all_info">
                <div className="post_header">
                    <div className="user_info">
                        <img src="./full.jpg" alt="" />
                        <div className="username">
                            <p>vicky_baba_98</p>
                            <span>Naini</span>
                        </div>
                    </div>
                    <i className="fa-solid fa-ellipsis"></i>
                </div>

                <div className="post_body">
                    <img src="./full.jpg" alt="" />
                </div>

                <div className="post_footer">
                    <div className="like">
                        <div className="message">
                        <i className="fa-regular fa-heart"></i>
                        <i className="fa-regular fa-comment"></i>
                        </div>
                        <i className="fa-regular fa-bookmark"></i>

                    </div>
                    <p>33 <span>likes</span></p>
                    <h5>View all comments</h5>
                    <div className="input">
                        <input type="text" name='Comment' placeholder='Add a comment...' />
                        <i className="fa-regular fa-face-smile"></i>
                    </div>
                </div>
            </div>

            <div className="all_info">
                <div className="post_header">
                    <div className="user_info">
                        <img src="./full.jpg" alt="" />
                        <div className="username">
                            <p>vicky_baba_98</p>
                            <span>Naini</span>
                        </div>
                    </div>
                    <i className="fa-solid fa-ellipsis"></i>
                </div>

                <div className="post_body">
                    <img src="./full.jpg" alt="" />
                </div>

                <div className="post_footer">
                    <div className="like">
                        <div className="message">
                        <i className="fa-regular fa-heart"></i>
                        <i className="fa-regular fa-comment"></i>
                        </div>
                        <i className="fa-regular fa-bookmark"></i>

                    </div>
                    <p>33 <span>likes</span></p>
                    <h5>View all comments</h5>
                    <div className="input">
                        <input type="text" name='Comment' placeholder='Add a comment...' />
                        <i className="fa-regular fa-face-smile"></i>
                    </div>
                </div>
            </div>

            
        </div>
    </div>
    </>
  )
}

export default Post
