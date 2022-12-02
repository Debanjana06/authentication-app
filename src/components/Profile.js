import { useEffect } from "react"
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"


const Profile = () => {
    const navigate= useNavigate()

    let getName = localStorage.getItem("localName")
    let getEmail = localStorage.getItem("localEmail")
    let getPassword = localStorage.getItem("localPassword")
    let getcurpass=localStorage.getItem("localcurpass")

    useEffect(()=>{
        if(!getEmail || !getName || !getPassword ){
            setTimeout(()=>{
                navigate('/')
            },500)
        }
    },[])

    const signOut = () =>{
        localStorage.setItem("localName", "")
        localStorage.setItem("localEmail", "")
        localStorage.setItem("localPassword", "")
        navigate('/')
    }

    return (
         <div  style={{width:'85%',margin:'auto',marginTop:'10px',fontSize:'1.8rem',textAlign:'center',fontWeight:'200'}}>
            <h1 className='display-1 mb-4'>Profile</h1>
            <hr/>
            <h3 className='display-6'>Full Name : {getName}</h3>
            <h3 className='display-6'>Email : {getEmail}</h3>
            <h3 className='display-6'>Password : {getPassword}</h3>

            <Button className='mt-4' variant="dark" onClick={signOut} style={{margin:'10px',width:'85px'}}>Logout</Button>
        </div>
      )
   
  
}

export default Profile