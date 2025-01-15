import { useEffect, useState } from 'react'
import './Story.css'
import Status_show from './Status_show';
import axios from 'axios';

function Story() {

    let [close,setclose]=useState(false);
    let [status,set_Status]=useState([])
    function StatusShow(id){
        console.log(id)
        setclose(true);

    }
    if(close){
        // return <StatusShow/>
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
        axios.get("http://localhost:3000/all_data_info_in_insta")
        .then(res=>{
            console.log(res.data);
            set_Status(res.data)
        })
        
    },[])
  return (
    <>
    <div className="all_info">
        <div className="story">
           { 

           status.map((e,index)=>{
            return(
                <div className="main" key={index}>
                <div className="circle" onClick={()=>StatusShow(e.id)}>
                    <img src={e.profile.meurl} alt="" />
                </div>
                <div className="name">
                    <p>{e.name}</p>
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

export default Story


