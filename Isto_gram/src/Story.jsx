import { useEffect, useState } from 'react'
import './Story.css'
import Status_show from './Status_show';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Story() {

    let [close,setclose]=useState(false);
    let [status,set_Status]=useState([])
    let nav =useNavigate()
    function StatusShow(id){
        console.log(id)
        setclose(true);
        localStorage.setItem("storyid",JSON.stringify(id))
        // <StatusShow id={id} />

    }
    if(close){
        // return <StatusShow />
        nav('/status')
    }
    useEffect(()=>{
       
        
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
                    <p>{(e.name.length>=9)?e.name.slice(0, 9).concat("..."):e.name}</p>
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


