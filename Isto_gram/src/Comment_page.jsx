import {useEffect, useRef,useState} from 'react'
import './Comment.css'
import Post from './Post'

function Comment_page() {
      let [dots,setdots]=useState(<i className="fa-solid fa-ellipsis"></i>)
       let [option,setoption]=useState(false)
      let [change_page_post,set_change_page_post]=useState(false)
      let [comment,setcomment]=useState('View all comments');
      let [c_input,setc_input]=useState({
        comments:""
      })
       let [p,setp]=useState(false);
       let [m,setm]=useState(false)
       let [s,sets]=useState(false)
       let like_counter =useRef("");




       function input_comment(e){
        // e.preventDefault();
        let {name,value}=e.target;
        console.log(name,value)
        setc_input({
            ...c_input,
            [name]:value
        })
        console.log(c_input.comments)
       }
       function viewComment(){
        setcomment(
            // <div className="comment_section">
            //     <div className="main_section">
                    
            //             <button><i className="fa-solid fa-xmark"></i></button>
    
            //          <div className='all_killer'>
            //                 <div className="image">
            //                     <img src="./full.jpg" alt="" />
            //                  </div>
            //             <div className="comment_info">
            //                 <div className="first">
            //                     <div className="user_info">
            //                                 <img src="./full.jpg" alt="" />
            //                                 <div className="username">
            //                                     <p>vicky_baba_98</p>
            //                                     <span>Naini</span>
            //                                 </div>
            //                     </div>
            //                             {/* {(dot_true)?{setdots}:{dots}} */}
            //                     <div onClick={changeIt}>
    
            //                                 {dots}
            //                     </div>
            //                 </div>
            //                 <div className="messaging">
                             
            //                 </div>
            //                 <div className="post_footer">
            //                     <div className="like">
            //                         <div className="message">
            //                             <div onClick={likeit}>
            //                                 {(p)?<i  className="fa-solid fa-heart liked"></i>:<i className="fa-regular fa-heart"></i>}
            //                             </div>
            //                             <div onClick={message}>
            //                                 {(m)?<i className="fa-solid fa-message messaged"></i>: <i className="fa-regular fa-message"></i>}
            //                             </div>
            //                         </div>
            //                     <div onClick={save}>
            //                             {(s)?<i className="fa-solid fa-bookmark saved"></i>:  <i className="fa-regular fa-bookmark"></i>}
            //                         </div>
    
            //                     </div>
            //                     <p ref={like_counter}>33 <span>likes</span></p>
            //                     <h5 onClick={viewComment}>{comment}</h5>
            //                     <div className="input">
            //                         <form >
            //                             <i className="fa-regular fa-face-smile"></i>
            //                             <input type="text" name='comment' value={c_input.comments}  onChange={input_comment} placeholder='Add a comment...' />
            //                         </form>
            //                         <button type='submit'>Post</button>
            //                     </div>
            //                 </div>
    
            //             </div>
            //         </div>
            //      </div>
                    
            // </div>
            
    
            )
       }
       function save(){
        sets(!s);
       }
       function message(){
        setm(!m)
       }
       function likeit(){
        
        setp(!p)
        if(p){
            like_counter.current.innerHTML='33 <span>likes</span>';
            console.log(like_counter);
        }
        else{
            like_counter.current.innerHTML='34 <span>likes</span>';
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

        function close_back(e){
            set_change_page_post(true)

        }
        if(change_page_post){
            return<Post/>
        }
        function submit_comment(e){
            e.preventDefault();

            console.log(c_input.comments)
        }
        // useEffect(()=>{
        //     console.log("useeffercct")
        // },[])
  return (
    <>
      <div className="comment_section">
            <div className="main_section">
                
                    <button onClick={close_back}><i className="fa-solid fa-xmark"></i></button>

                 <div className='all_killer'>
                        <div className="image">
                            <img src="./full.jpg" alt="" />
                         </div>
                    <div className="comment_info">
                        <div className="first">
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
                        <div className="messaging">
                            <div className="mess">
                                

                                <div className="main_message">
                                    <div className="info_all">
                                                <img src="./full." alt="" />
                                                <div className="para">
                                                    <p>vicky_baba_98</p>
                                                    <span>मैं और मेरे भाई ही मेरी ताक़त है
                                                    आज जो भी हूँ वही सब के दाम पे ही हूँ
                                                    बाक़ी सब अपने हाल पे ठीक है
                                                    जय सुमेश्वर नाथ महादेव।</span>
                                                    <h6> See Translation</h6>
                                                </div>
                                    </div>
                                </div>
                                <div className="first_message">
                                    <div className="all_data">
                                            <img src="" alt="" />
                                        <div className="name">
                                            <h5>nauvgavcb <span>ertyuiopoiuylorm  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde ab veritatis soluta tempore dignissimos eius ducimus aspernatur repellat a enim laborum, maiores nemo at, quis magni cumque aliquid repellendus quos!trertyuioiuytrertyuioiuytrertyuio</span></h5>
                                            <h1><span>2h</span> <span>1 like</span> <span>Reply</span></h1>
                                        </div>
                                    </div>
                                    <div onClick={likeit}>
                                        {(p)?<i  className="fa-solid fa-heart liked"></i>:<i className="fa-regular fa-heart"></i>}
                                    </div>
                                </div>





                                <div className="first_message">
                                    <div className="all_data">
                                            <img src="" alt="" />
                                        <div className="name">
                                            <h5>nauvgavcb <span>ertyuiopoiuylorm  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde ab veritatis soluta tempore dignissimos eius ducimus aspernatur repellat a enim laborum, maiores nemo at, quis magni cumque aliquid repellendus quos!trertyuioiuytrertyuioiuytrertyuio</span></h5>
                                            <h1><span>2h</span> <span>1 like</span> <span>Reply</span></h1>
                                        </div>
                                    </div>
                                    <i className="fa-regular fa-heart"></i>
                                </div>
                                <div className="first_message">
                                    <div className="all_data">
                                            <img src="" alt="" />
                                        <div className="name">
                                            <h5>nauvgavcb <span>ertyuiopoiuylorm  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde ab veritatis soluta tempore dignissimos eius ducimus aspernatur repellat a enim laborum, maiores nemo at, quis magni cumque aliquid repellendus quos!trertyuioiuytrertyuioiuytrertyuio</span></h5>
                                            <h1><span>2h</span> <span>1 like</span> <span>Reply</span></h1>
                                        </div>
                                    </div>
                                    <i className="fa-regular fa-heart"></i>
                                </div><div className="first_message">
                                    <div className="all_data">
                                            <img src="" alt="" />
                                        <div className="name">
                                            <h5>nauvgavcb <span>ertyuiopoiuylorm  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde ab veritatis soluta tempore dignissimos eius ducimus aspernatur repellat a enim laborum, maiores nemo at, quis magni cumque aliquid repellendus quos!trertyuioiuytrertyuioiuytrertyuio</span></h5>
                                            <h1><span>2h</span> <span>1 like</span> <span>Reply</span></h1>
                                        </div>
                                    </div>
                                    <i className="fa-regular fa-heart"></i>
                                </div><div className="first_message">
                                    <div className="all_data">
                                            <img src="" alt="" />
                                        <div className="name">
                                            <h5>nauvgavcb <span>ertyuiopoiuylorm  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde ab veritatis soluta tempore dignissimos eius ducimus aspernatur repellat a enim laborum, maiores nemo at, quis magni cumque aliquid repellendus quos!trertyuioiuytrertyuioiuytrertyuio</span></h5>
                                            <h1><span>2h</span> <span>1 like</span> <span>Reply</span></h1>
                                        </div>
                                    </div>
                                    <i className="fa-regular fa-heart"></i>
                                </div><div className="first_message">
                                    <div className="all_data">
                                            <img src="" alt="" />
                                        <div className="name">
                                            <h5>nauvgavcb <span>ertyuiopoiuylorm  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde ab veritatis soluta tempore dignissimos eius ducimus aspernatur repellat a enim laborum, maiores nemo at, quis magni cumque aliquid repellendus quos!trertyuioiuytrertyuioiuytrertyuio</span></h5>
                                            <h1><span>2h</span> <span>1 like</span> <span>Reply</span></h1>
                                        </div>
                                    </div>
                                    <i className="fa-regular fa-heart"></i>
                                </div><div className="first_message">
                                    <div className="all_data">
                                            <img src="" alt="" />
                                        <div className="name">
                                            <h5>nauvgavcb <span>ertyuiopoiuylorm  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde ab veritatis soluta tempore dignissimos eius ducimus aspernatur repellat a enim laborum, maiores nemo at, quis magni cumque aliquid repellendus quos!trertyuioiuytrertyuioiuytrertyuio</span></h5>
                                            <h1><span>2h</span> <span>1 like</span> <span>Reply</span></h1>
                                        </div>
                                    </div>
                                    <i className="fa-regular fa-heart"></i>
                                </div><div className="first_message">
                                    <div className="all_data">
                                            <img src="" alt="" />
                                        <div className="name">
                                            <h5>nauvgavcb <span>ertyuiopoiuylorm  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde ab veritatis soluta tempore dignissimos eius ducimus aspernatur repellat a enim laborum, maiores nemo at, quis magni cumque aliquid repellendus quos!trertyuioiuytrertyuioiuytrertyuio</span></h5>
                                            <h1><span>2h</span> <span>1 like</span> <span>Reply</span></h1>
                                        </div>
                                    </div>
                                    <i className="fa-regular fa-heart"></i>
                                </div><div className="first_message">
                                    <div className="all_data">
                                            <img src="" alt="" />
                                        <div className="name">
                                            <h5>nauvgavcb <span>ertyuiopoiuylorm  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde ab veritatis soluta tempore dignissimos eius ducimus aspernatur repellat a enim laborum, maiores nemo at, quis magni cumque aliquid repellendus quos!trertyuioiuytrertyuioiuytrertyuio</span></h5>
                                            <h1><span>2h</span> <span>1 like</span> <span>Reply</span></h1>
                                        </div>
                                    </div>
                                    <i className="fa-regular fa-heart"></i>
                                </div><div className="first_message">
                                    <div className="all_data">
                                            <img src="" alt="" />
                                        <div className="name">
                                            <h5>nauvgavcb <span>ertyuiopoiuylorm  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde ab veritatis soluta tempore dignissimos eius ducimus aspernatur repellat a enim laborum, maiores nemo at, quis magni cumque aliquid repellendus quos!trertyuioiuytrertyuioiuytrertyuio</span></h5>
                                            <h1><span>2h</span> <span>1 like</span> <span>Reply</span></h1>
                                        </div>
                                    </div>
                                    <i className="fa-regular fa-heart"></i>
                                </div><div className="first_message">
                                    <div className="all_data">
                                            <img src="" alt="" />
                                        <div className="name">
                                            <h5>nauvgavcb <span>ertyuiopoiuylorm  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde ab veritatis soluta tempore dignissimos eius ducimus aspernatur repellat a enim laborum, maiores nemo at, quis magni cumque aliquid repellendus quos!trertyuioiuytrertyuioiuytrertyuio</span></h5>
                                            <h1><span>2h</span> <span>1 like</span> <span>Reply</span></h1>
                                        </div>
                                    </div>
                                    <i className="fa-regular fa-heart"></i>
                                </div><div className="first_message">
                                    <div className="all_data">
                                            <img src="" alt="" />
                                        <div className="name">
                                            <h5>nauvgavcb <span>ertyuiopoiuylorm  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde ab veritatis soluta tempore dignissimos eius ducimus aspernatur repellat a enim laborum, maiores nemo at, quis magni cumque aliquid repellendus quos!trertyuioiuytrertyuioiuytrertyuio</span></h5>
                                            <h1><span>2h</span> <span>1 like</span> <span>Reply</span></h1>
                                        </div>
                                    </div>
                                    <i className="fa-regular fa-heart"></i>
                                </div>

                                
                            </div>

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
                            <h5 onClick={viewComment}>{comment}</h5>
                            <div className="input" >
                                <form onSubmit={submit_comment} >
                                    <i className="fa-regular fa-face-smile"></i>
                                    <input type="text" name='comments' value={c_input.comments}  onChange={input_comment} placeholder='Add a comment...' />
                                    <button type='submit'>Post</button>
                                </form>
                                
                            </div>
                        </div>

                    </div>
                </div>
             </div>
                
        </div>
    </>
  )
}

export default Comment_page
