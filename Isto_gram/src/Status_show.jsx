import axios from 'axios';
import Home_page from './Home_page';
import './Status_show.css'
import  { useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function Status_show(props) {
    let [close,setclose]=useState(false)
    let [video,set_video]=useState(null)
    let nav =useNavigate();
    let {id}=props;
    id=1;

    function Closebtn(){
        // console.log(id)
        setclose(true);
    }
   
    if(close){
        // return <Home_page/>
        nav('/home')
    }
    useEffect(()=>{
        axios.get(`http://localhost:3000/all_data_info_in_insta/${id}`)
        .then(res=>{
            console.log(res.data)
            set_video(res.data)
        })
    },[])
    if(!video){
        return <p>Loading...</p>
    }
    return (
        <>
        <div className="status_Section">
            <div className="status_info">
                <div className="header">
                <i onClick={Closebtn} className="fa-solid fa-xmark"></i>
                </div>
                <div className='video'>
                    <iframe src={video.status.video_url} frameborder="0" allow="autoplay; encrypted-media"
        allowFullScreen
        title="Video Player" ></iframe>

            
                </div>
            </div>
        </div>

    </>
    );
}
