import { useEffect, useRef, useState } from 'react';
import './Dasboard.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';




export default function DashBoard() {
    let [all_Data,set_All_data]=useState([]);
    let [edit_de_f,set_edit_de]=useState(false);
    let [home,sethome]=useState(true)
    let [login,set_login]=useState(false);
    let [insert,set_insert]=useState(false);
    let [update_T,set_update_t]=useState(false);
    let [update_frm,setupdate_frm]=useState("");
    let [update_data,set_update_data]=useState({});
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


            //  search btn
    let [search_data,set_search_data]=useState([]);
    let [searchinput,set_search_input]=useState("");  
    let [search_option,set_search_option]=useState();
    let[option_input,set_option_input]=useState("");
    let [data_select,set_data_select]=useState([]);

      

let filler;
    const searchbtn=(e)=>{
  
       filler =search_data.filter((e)=>{return e.name===searchinput})
      console.log(filler)
    }

    const Selectoption=(e)=>{
    set_search_option(e.target.value)
    
      // set_search_option({...search_option,e.target.value})
    }
    let fio;
    const option_Search=(e)=>{
      console.log(option_input)
      console.log(search_option)
       fio =search_data.filter((e)=>{return e[search_option]==option_input})
      console.log(fio)
      set_data_select(fio)

    }




    // search btn
    //   edit 

    if(update_T){
        console.log(update_data)
       

    }




    // update from

    const UpdateFrom =(e)=>{

        axios.put(`http://localhost:3000/all_data_info_in_insta/${update_data.id}`,update_data)
        .then(res=>{alert("update is completed....!!!")})
    }
    const Update_handle= (e)=>{
        let {name,value}=e.target;
        set_update_data({
            ...update_data,
            [name]:value
        })

    }
    // update from


    // if(home){
    //     set_insert(false)
    //     set_edit_de(false)
    // }
    // if(insert){
    //     sethome(false);
    //     set_edit_de(false)
    // }
    // if(edit_de_f){
    //     sethome(false);
    //     set_insert(false)
    // }
   


    // edit


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

    // insert data

    let nav =useNavigate();
    if(login){
        nav("/admindas")
    }
// delete

    const deleteitem=(id)=>{
        console.log(id)
        axios.delete(`http://localhost:3000/all_data_info_in_insta/${id}`)
        .then(res=>{alert("Deleted !!!!!...")})
    }

    useEffect(()=>{
        axios.get("http://localhost:3000/all_data_info_in_insta")
        .then(res=>{
            // console.log(res.data);
            if(!searchinput){
              set_search_data(res.data);
              set_All_data(res.data);
            }
            
            else{
              set_search_data(res.data);
              filler =search_data.filter((e)=>{return e.name==searchinput})
      // console.log(filler)
      set_All_data(filler)
      
      

            }
            
          
          })
     
    },[InsertFrom,deleteitem,UpdateFrom,searchbtn])
    // InsertFrom

  return (
    <div className='Dashboard'>
    <div className="navbar_heading">
        <h1>Admin Dashboard Management System</h1>
    </div>
    <div className="nav">
        <nav>
            <div className='logo'>
                <h1>Bipin</h1>
            </div>
            <ul>
                <li onClick={()=>{sethome(true),set_edit_de(false),set_insert(false)}}> Home</li>
                <li onClick={()=>{set_insert(true),sethome(false),set_edit_de(false)}}>  Insert Data</li>
                <li onClick={()=>{set_edit_de(true),sethome(false),set_insert(false)}} >See All Data</li>
                <li onClick={()=>{set_login(true)}}>Logout</li>
            </ul>
        </nav>
    </div>
    <div className="search_bar">
                <div className="input">
                    <input type="text" placeholder='Enter the name' onChange={(e)=>{set_search_input(e.target.value)}} />
                    <i className="fa-solid fa-magnifying-glass" onClick={searchbtn} ></i>
                </div>
                <div className="seach_option">
                   <select id="cars"  onChange={Selectoption}>
                    <option value="name">Enter the Name</option>
                    <option value="id">Enter the ID</option>
                    <option value="place">Enter the City</option>
                    <option value="likes">Enter the Likes</option>
                    </select>
                    <input type="text" placeholder="Write.........." onChange={(e)=>{set_option_input(e.target.value)}} />
                    <i className="fa-solid fa-magnifying-glass" onClick={option_Search}></i>
                </div>
            </div>
    <div className="tabels">
        <div className="inner_tabels">

        {/*  */}





            {
            (edit_de_f)?(<table border='1' >
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
                data_select.map((e,index)=>{
                  return (
                      <tr key={index} >
                          <td>{e.id}</td>
                          <td>{e.name}</td>
                          <td>{e.profile?.meurl}</td>
                          <td>{e.address}</td>
                          <td>{e.status?.video_url}</td>
                          <td>{e.like}</td>
                          <td>{e.status?.imageurl}</td>
                          <td>{e.message?.me}</td>
                          <td>{e.messageinfo?.comment}</td>
                          <td><button onClick={()=>{set_update_data(e),set_update_t(true)}}>Edit </button></td>
                           <td><button onClick={()=>{deleteitem(e.id)}}>Delete</button></td>
                      </tr>
                  )
              })
              }
              
                {
                    all_Data.map((e,index)=>{
                        return (
                            <tr key={index} >
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.profile?.meurl}</td>
                                <td>{e.address}</td>
                                <td>{e.status?.video_url}</td>
                                <td>{e.like}</td>
                                <td>{e.status?.imageurl}</td>
                                <td>{e.message?.me}</td>
                                <td>{e.messageinfo?.comment}</td>
                                <td><button onClick={()=>{set_update_data(e),set_update_t(true)}}>Edit </button></td>
                                 <td><button onClick={()=>{deleteitem(e.id)}}>Delete</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>    
            </table>):""
            }



{
            (home)?(<table border='1' >
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
                data_select.map((e,index)=>{
                  return (
                      <tr key={index} >
                          <td>{e.id}</td>
                          <td>{e.name}</td>
                          <td>{e.profile?.meurl}</td>
                          <td>{e.address}</td>
                          <td>{e.status?.video_url}</td>
                          <td>{e.like}</td>
                          <td>{e.status?.imageurl}</td>
                          <td>{e.message?.me}</td>
                          <td>{e.messageinfo?.comment}</td>
                          <td><button onClick={()=>{set_update_data(e),set_update_t(true)}}>Edit </button></td>
                           <td><button onClick={()=>{deleteitem(e.id)}}>Delete</button></td>
                      </tr>
                  )
              })
              }
                {
                    all_Data.map((e,index)=>{
                        return (
                            <tr key={index} >
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.profile?.meurl ||" "}</td>
                                <td>{e.address}</td>
                                <td>{e.status?.video_url || ""}</td>
                                <td>{e.like}</td>
                                <td>{e.status?.imageurl ||" "}</td>
                                <td>{e.message?.me||" "}</td>
                                <td>{e.messageinfo?.comment}</td>
                            </tr>
                        )
                    })
                }
            </tbody>    
            </table>):""
            }
          
{
    (update_T)?(
        <div className="updating">
                <div className="inner_updating">
                <div
              style={{
                maxWidth: "600px",
                margin: "0 auto",
                padding: "20px",
                backgroundColor: "#f7f7f7",
                borderRadius:"20px"
              }}
            >
              <form onSubmit={UpdateFrom}
                style={{
                  display: "grid",
                  gap: "15px",
                }}
              >
                <h1 style={{color:"red", textAlign:"center"}}>Update the data</h1>
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
                      value={update_data.name}
                      onChange={Update_handle}
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
                      value={update_data.address}
                      onChange={Update_handle}
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
                    value={update_data.profile.meurl}
                    onChange={Update_handle}   placeholder="Profile Image URL"
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
                      value={update_data.status.video_url}
                      onChange={Update_handle}
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
                    <input type="text" name='imageurl' value={update_data.status.imageurl} onChange={Update_handle} style={{
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
                    value={update_data.like}
                    onChange={Update_handle}
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
                    value={update_data.message.me}
                    onChange={Update_handle}
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
                    value={update_data.messageinfo.comment}
                    onChange={Update_handle}
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
            </div>):" "
}





          {
            (insert)?(
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
        )
            :" "
          }
        </div>
    </div>
      
    </div>
  )
}
