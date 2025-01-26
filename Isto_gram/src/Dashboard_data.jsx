import { useEffect, useState } from "react"
import axios from 'axios'
import './Dasboard.css'
function Dashboard_data() {
    let [all_Data,set_All_data]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3000/all_data_info_in_insta")
        .then(res=>{
            console.log(res.data);
            set_All_data(res.data);
          })
    },[ ])
  return (
    <>
        <div className="tabels">
        <div className="inner_tabels">
          <table border='1' >
            <thead>
                <tr>
                         <th>Id</th>
                            <th> User Name</th>
                            <th>User Img</th>
                            <th>User Address</th>
                            <th>Story</th>
                            <th> Post Likes</th>
                            <th>Post Img</th>
                            <th>Comments</th>
                            <th>User Comments</th>

                </tr>
            </thead>
            <tbody>
                {
                    all_Data.map((e,index)=>{
                        return (
                            <tr key={index} >
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.profile.meurl}</td>
                                <td>{e.address}</td>
                                <td>{e.status.video_url}</td>
                                <td>{e.like}</td>
                                <td>{e.status.imageurl}</td>
                                <td>{e.message.me}</td>
                                <td>{e.messageinfo.comment}</td>
                            </tr>
                        )
                    })
                }
            </tbody>    
            </table>)
            </div>
    </div>
    </>
  )
}

export default Dashboard_data
