import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Dasboard.css'
function DashboardInsert() {
     let [insert_data,set_insert_data]=useState({
            "name": "",
            "like":"",
            "address": "",
            "status": {
              "video_url": "",
              "imageurl": ""
            },
            "profile": {
              "meurl": ""
            },
            "message": {
              "me": ""
            },
            "messageinfo": {
              "urlimg": "https://cdn.pixabay.com/photo/2022/09/08/15/16/cute-7441224_640.jpg",
              "name": "rahul_sharma",
              "comment": "",
              "user": {
                "urlimg": "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9020354_b_v8_ae.jpg",
                "name": "sita_devi",
                "comment": "you inspire me"
              },
              "user1": {
                "urlimg": "https://i0.wp.com/cswag.org/wp-content/uploads/2020/10/Teen-Girls_.jpg?resize=750%2C494&ssl=1",
                "name": "ajay_kumar",
                "comment": "awesome pic"
              },
              "user2": {
                "urlimg": "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "name": "priya_singh",
                "comment": "great shot"
              },
              "user3": {
                "urlimg": "",
                "name": "",
                "comment": ""
              },
              "user4": {
                "urlimg": "",
                "name": "",
                "comment": ""
              },
              "user5": {
                "urlimg": "",
                "name": "",
                "comment": ""
              }
            }
          })
        //   insert data 
        const insert_handle=(e)=>{
            let {name,value}=e.target;
            set_insert_data({
                ...insert_data,
                [name]:value
            })
            // console.log(insert_data)
        }
    
        const InsertFrom =(e)=>{
            e.preventDefault();
            console.log(insert_data)
            axios.post("http://localhost:3000/all_data_info_in_insta",insert_data)
            .then(res=>{alert("You insert the one data")})
            .catch(re=>{alert("not inserting data server problem try again")})
        }

        useEffect(()=>{
            console.log("insert")
        },[InsertFrom])
    
        // insert data
  return (
    <>
     <div className="tabels">
     <div className="inner_tabels">
                    <div
        style={{
            maxWidth: "600px",
            margin: "0 auto",
            padding: "20px",
            backgroundColor: "#f7f7f7",
        }}
        >
        <form onSubmit={InsertFrom}
            style={{
            display: "grid",
            gap: "15px",
            }}
        >
            <h1 style={{color:"red"}}>Insert the data from Admin</h1>
            <div>
            <label
                htmlFor="fullName"
                style={{
                display: "block",
                marginBottom: "8px",
                fontSize: "14px",
                color: "#333",
                }}
            >
                Full Name
            </label>
            <div
                style={{
                display: "grid",gridTemplateColumns: "1fr 1fr",gap: "15px",}}>
                <input
                type="text"
                id="firstName"
                name='name'
                value={insert_data.name}
                onChange={insert_handle}
                placeholder="First Name"
                style={{
                    width: "100%",
                    padding: "8px",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                    fontSize: "14px",
                }}
                />
                <input
                type="text"
                name='address'
                value={insert_data.address}
                onChange={insert_handle}
                id="lastName"
                placeholder="Enter your City"
                style={{
                    width: "100%",
                    padding: "8px",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                    fontSize: "14px",
                }}
                />
            </div>
            </div>

            <div>
            
            <input
                type="text"
                name='meurl'
                id="streetAddressLine2"
                value={insert_data.profile.meurl}
                onChange={insert_handle}
                placeholder="Profile Image URL"
                style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                fontSize: "14px",
                }}
            />
            </div>

            <div
            style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "15px",
            }}
            >
            <div>
                <input
                type="text"
                id="city"
                name='video_url'
                value={insert_data.status.video_url}
                onChange={insert_handle}
                placeholder="Enter the story url"
                style={{
                    width: "100%",
                    padding: "8px",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                    fontSize: "14px",
                }}
                />
            </div>
            <div>
                <input type="text" name='imageurl' value={insert_data.status.imageurl} onChange={insert_handle} style={{
                    width: "100%",
                    padding: "8px",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                    fontSize: "14px",
                }} placeholder='Enter the Post image url' />
            </div>
            </div>

            <div>
            <input
                type="text"
                id="postalCode"
                name='like'
                value={insert_data.like}
                onChange={insert_handle}
                placeholder="Enter your likes"
                style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                fontSize: "14px",
                }}
            />
            </div>

            <div>
            <input
                type="text"
                name='me'
                value={insert_data.message.me}
                onChange={insert_handle}
                id="phoneNumber"
                placeholder="Post Bio"
                style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                fontSize: "14px",
                }}
            />
            </div>

            <div>
            <label
                htmlFor="email"
                style={{
                display: "block",
                marginBottom: "8px",
                fontSize: "14px",
                color: "#333",
                }}
            >
                First Comments
            </label>
            <input
                type="text"
                id="email"
                name='comment'
                value={insert_data.messageinfo.comment}
                onChange={insert_handle}
                placeholder="First comments"
                style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                fontSize: "14px",
                }}
            />
            
            </div>


            <button style={{height:"30px", cursor:'pointer', backgroundColor:"orange",color:"black", border:"1px solid black",outline:"none", font:"15px", borderRadius:"10px", fontWeight:"500"
            }}>Submit</button>
        </form>
        </div>


        </div>
        </div>        
          
    </>
  )
}

export default DashboardInsert
