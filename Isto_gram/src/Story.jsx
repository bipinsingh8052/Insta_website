import { useEffect, useState } from 'react'
import './Story.css'
import Status_show from './Status_show';
function Story() {

    let [close,setclose]=useState(false);
    function StatusShow(e){
        setclose(true);

    }
    if(close){
        return <StatusShow/>
    }
    useEffect(()=>{
        let a=document.querySelectorAll(".name p")
        // console.log(a)

        
        for(let i=0;i<=a.length-1;i++){
            if(a[i].innerHTML.length >9){
                let b=a[i].innerHTML
                let c=b.slice(0,9)

                let d=c.concat("...");
                a[i].innerHTML=d

            }
        }
        
    },[])
  return (
    <>
    <div className="all_info">
        <div className="story">
            <div className="main">
                <div className="circle" onClick={StatusShow}>
                    <img src="./working.jpg" alt="" />
                </div>
                <div className="name">
                    <p>rohit_thakur</p>
                </div>
            </div>





            <div className="main">
                <div className="circle">
                    <img src="" alt="" />
                </div>
                <div className="name">
                    <p>rohit_thakur</p>
                </div>
            </div>






            <div className="main">
                <div className="circle">
                    <img src="" alt="" />
                </div>
                <div className="name">
                    <p>rohit_thakur</p>
                </div>
            </div>






            <div className="main">
                <div className="circle">
                    <img src="" alt="" />
                </div>
                <div className="name">
                    <p>rohit_thakur</p>
                </div>
            </div>






            <div className="main">
                <div className="circle">
                    <img src="" alt="" />
                </div>
                <div className="name">
                    <p>rohit_thakur</p>
                </div>
            </div>






            <div className="main">
                <div className="circle">
                    <img src="" alt="" />
                </div>
                <div className="name">
                    <p>rohit_thakur</p>
                </div>
            </div>






            <div className="main">
                <div className="circle">
                    <img src="" alt="" />
                </div>
                <div className="name">
                    <p>rohit_thakur</p>
                </div>
            </div>






            <div className="main">
                <div className="circle">
                    <img src="" alt="" />
                </div>
                <div className="name">
                    <p>rohit_thakur</p>
                </div>
            </div>






            <div className="main">
                <div className="circle">
                    <img src="" alt="" />
                </div>
                <div className="name">
                    <p>rohit_thakur</p>
                </div>
            </div>






            <div className="main">
                <div className="circle">
                    <img src="" alt="" />
                </div>
                <div className="name">
                    <p>rohit_thakur</p>
                </div>
            </div>






            <div className="main">
                <div className="circle">
                    <img src="" alt="" />
                </div>
                <div className="name">
                    <p>rohit_thakur</p>
                </div>
            </div>






            <div className="main">
                <div className="circle">
                    <img src="" alt="" />
                </div>
                <div className="name">
                    <p>rohit_thakur</p>
                </div>
            </div>






            <div className="main">
                <div className="circle">
                    <img src="" alt="" />
                </div>
                <div className="name">
                    <p>rohit_thakur</p>
                </div>
            </div>






            <div className="main">
                <div className="circle">
                    <img src="" alt="" />
                </div>
                <div className="name">
                    <p>rohit_thakur</p>
                </div>
            </div>






            <div className="main">
                <div className="circle">
                    <img src="" alt="" />
                </div>
                <div className="name">
                    <p>rohit_thakur</p>
                </div>
            </div>






            <div className="main">
                <div className="circle">
                    <img src="" alt="" />
                </div>
                <div className="name">
                    <p>rohit_thakur</p>
                </div>
            </div>






            <div className="main">
                <div className="circle">
                    <img src="" alt="" />
                </div>
                <div className="name">
                    <p>rohit_thakur</p>
                </div>
            </div>






            <div className="main">
                <div className="circle">
                    <img src="" alt="" />
                </div>
                <div className="name">
                    <p>rohit_thakur</p>
                </div>
            </div>






            <div className="main">
                <div className="circle">
                    <img src="" alt="" />
                </div>
                <div className="name">
                    <p>rohit_thakur</p>
                </div>
            </div>






            <div className="main">
                <div className="circle">
                    <img src="" alt="" />
                </div>
                <div className="name">
                    <p>rohit_thakur</p>
                </div>
            </div>






            <div className="main">
                <div className="circle">
                    <img src="" alt="" />
                </div>
                <div className="name">
                    <p>rohit_thakur</p>
                </div>
            </div>






            <div className="main">
                <div className="circle">
                    <img src="" alt="" />
                </div>
                <div className="name">
                    <p>rohit_thakur</p>
                </div>
            </div>






            <div className="main">
                <div className="circle">
                    <img src="" alt="" />
                </div>
                <div className="name">
                    <p>rohit_thakur</p>
                </div>
            </div>






            <div className="main">
                <div className="circle">
                    <img src="" alt="" />
                </div>
                <div className="name">
                    <p>rohit_thakur</p>
                </div>
            </div>






            <div className="main">
                <div className="circle">
                    <img src="" alt="" />
                </div>
                <div className="name">
                    <p>rohit_thakur</p>
                </div>
            </div>






            <div className="main">
                <div className="circle">
                    <img src="" alt="" />
                </div>
                <div className="name">
                    <p>rohit_thakur</p>
                </div>
            </div>






            <div className="main">
                <div className="circle">
                    <img src="" alt="" />
                </div>
                <div className="name">
                    <p>rohit_thakur</p>
                </div>
            </div>






            <div className="main">
                <div className="circle">
                    <img src="" alt="" />
                </div>
                <div className="name">
                    <p>rohit_thakur</p>
                </div>
            </div>






             <div className="main">
                <div className="circle">
                    <img src="" alt="" />
                </div>
                <div className="name">
                    <p>rohit_thakur</p>
                </div>
            </div>






            <div className="main">
                <div className="circle">
                    <img src="" alt="" />
                </div>
                <div className="name">
                    <p>rohit_thakur</p>
                </div>
            </div>






             <div className="main">
                <div className="circle">
                    <img src="" alt="" />
                </div>
                <div className="name">
                    <p>rohit_thakur</p>
                </div>
            </div>






             <div className="main">
                <div className="circle">
                    <img src="" alt="" />
                </div>
                <div className="name">
                    <p>rohit_thakur</p>
                </div>
            </div>






            <div className="main">
                <div className="circle">
                    <img src="" alt="" />
                </div>
                <div className="name">
                    <p>rohit_thakur</p>
                </div>
            </div>






             <div className="main">
                <div className="circle">
                    <img src="" alt="" />
                </div>
                <div className="name">
                    <p>rohit_thakur</p>
                </div>
            </div>






            <div className="main">
                <div className="circle">
                    <img src="" alt="" />
                </div>
                <div className="name">
                    <p>rohit_thakur</p>
                </div>
            </div>






            <div className="main">
                <div className="circle">
                    <img src="" alt="" />
                </div>
                <div className="name">
                    <p>rohit_thakur</p>
                </div>
            </div>






            <div className="main">
                <div className="circle">
                    <img src="" alt="" />
                </div>
                <div className="name">
                    <p>rohit_thakur</p>
                </div>
            </div>






            <div className="main">
                <div className="circle">
                    <img src="" alt="" />
                </div>
                <div className="name">
                    <p>rohit_thakur</p>
                </div>
            </div>






            <div className="main">
                <div className="circle">
                    <img src="" alt="" />
                </div>
                <div className="name">
                    <p>rohit_thakur</p>
                </div>
            </div>






             <div className="main">
                <div className="circle">
                    <img src="" alt="" />
                </div>
                <div className="name">
                    <p>rohit_thakur</p>
                </div>
            </div>






            <div className="main">
                <div className="circle">
                    <img src="" alt="" />
                </div>
                <div className="name">
                    <p>rohit_thakur</p>
                </div>
            </div>






            <div className="main">
                <div className="circle">
                    <img src="" alt="" />
                </div>
                <div className="name">
                    <p>rohit_thakur</p>
                </div>
            </div>






            <div className="main">
                <div className="circle">
                    <img src="" alt="" />
                </div>
                <div className="name">
                    <p>rohit_thakur</p>
                </div>
            </div>






            <div className="main">
                <div className="circle">
                    <img src="" alt="" />
                </div>
                <div className="name">
                    <p>rohit_thakur</p>
                </div>
            </div>






             <div className="main">
                <div className="circle">
                    <img src="" alt="" />
                </div>
                <div className="name">
                    <p>rohit_thakur</p>
                </div>
            </div>






            <div className="main">
                <div className="circle">
                    <img src="./half.jpg" alt="" />
                </div>
                <div className="name">
                    <p>rohit_thakur</p>
                </div>
            </div>






             <div className="main">
                <div className="circle">
                    <img src="" alt="" />
                </div>
                <div className="name">
                    <p>rohit_thakur</p>
                </div>
            </div>






            

        </div>




        
    </div>
      
    </>
  )
}

export default Story


