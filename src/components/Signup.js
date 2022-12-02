import { useState , useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import { Button , Col , Form , InputGroup , Row, Alert } from 'react-bootstrap';
import './Signup.css'
const Signup = () =>{
 

   const [userDetails,setUserDetails] =useState({
    fullName:'',
    email:'',
    password:'',
    confirm_password:''
   })

 
   const [error,setError] = useState({
    fullName:false,
    email:false,
    password:false,
    confirm_password:false
   })

   const [submit,setSubmit] = useState(false)
   const [success,setSuccess] = useState(false)
   const [trueclick,setClick] =useState(false);

   useEffect(() => {
    if(submit && !Object.values(error).includes(true)){
      setSuccess(true)
      setUserDetails({
        fullName:'',
        email:'',
        password:'',
        confirm_password:''
       })
    }
   },[submit,error])

   const navigate= useNavigate();

   const{fullName,email,password,confirm_password} = userDetails
   
    const handleSubmit = (e) => 
    {
      e.preventDefault();
      

    
      if(fullName.length >= 3) {
        setError((previousError)=>({
         ...previousError,
         fullName:false
        }))
       } else {
         setError((previousError)=>({
           ...previousError,
           fullName:true
          }))
       }

      if(
        email.indexOf(" ")!==0 &&
        email.includes('@') && 
        email.includes('.') && 
        email.indexOf('@')!==0 && 
        email.length - email.lastIndexOf('.') >2 &&  email.length - email.lastIndexOf('.') <=4 &&
        email.charAt(email.length-1)!== '.'){
          setError((previousError)=>({
            ...previousError,
            email:false
           }))
        }else{
          setError((previousError)=>({
            ...previousError,
            email:true
           }))
      }

      if(password.length>=8){
        setError((previousError)=>({
          ...previousError,
          password:false
         }))
      }else{
        setError((previousError)=>({
          ...previousError,
          password:true
         }))
      }
      
      if(password.length !==0 && password!==confirm_password){
        setError((previousError)=>({
          ...previousError,
          confirm_password:false
         }))
      }else{
        setError((previousError)=>({
          ...previousError,
          confirm_password:true
         }))
      }
      
      
    
   setSubmit(true)
  
  } 
      
          // localStorage.setItem("localName" , fullName)
          // localStorage.setItem("localEmail", email)
          // localStorage.setItem("localPassword", password)
          // fullName("")
          // email("")
          // password("")
          // confirm_password("")

          // setTimeout(() => {
          //   navigate('/Profile')
          // }, 500);
        
      const onSubmit=()=>{
        if(!error.fullName && !error.email && !error.password && userDetails.password===userDetails.confirm_password){
          setClick(true);
          localStorage.setItem("localName", fullName)
          localStorage.setItem("localEmail", email)
          localStorage.setItem("localPassword", password)
          // localStorage.setItem("localcurpass",confirm_password)
          setUserDetails({
            ...userDetails,
            fullName:""
        })
        setUserDetails({
          ...userDetails,
          email:""
      })
      setUserDetails({
        ...userDetails,
        password:""
    })
    setUserDetails({
      ...userDetails,
      confirm_password:""
    })
    
    setClick(true);
          setTimeout(() => {
            navigate('/Profile')
          }, 500);
       }
      }
   
   
  
  
   useEffect(()=>{ 
    if(localStorage.getItem("localName")&&
    localStorage.getItem("localEmail")&&
    localStorage.getItem("localPassword")){

      setTimeout(() => {
        navigate('/Profile')
      }, 500);
    }
   },[])
    
  return (
    < >
    <h1 className='display-4'>SignUp Form</h1>
    {success &&
     <Alert variant="success">
        Your details are saved successfully!
      </Alert>
    }
    <Form onSubmit={handleSubmit}
    className="registration-form">
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Full name</Form.Label>
          <Form.Control
           type="text"
            placeholder="Full name"
            value={userDetails.fullName}
            onChange={(e)=>{
              setUserDetails({
                ...userDetails,
                fullName:e.target.value
            })
            if(e.target.value.length >= 3) {
              setError((previousError)=>({
               ...previousError,
               fullName:false
              }))
             } else {
               setError((previousError)=>({
                 ...previousError,
                 fullName:true
                }))
             }
          }}
            
          />
          {submit && !success &&(error.fullName ? 
          (<Form.Control.Feedback type="invalid">Please choose a valid Full Name. </Form.Control.Feedback>)
        : (<Form.Control.Feedback>Looks good!</Form.Control.Feedback>))}
          
          
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="email"
              aria-describedby="inputGroupPrepend"
              value={userDetails.email}
              onChange={(e)=>{
                setUserDetails({
                ...userDetails,
                email:e.target.value
            })
            if(
              e.target.value.indexOf(" ")!==0 &&
              e.target.value.includes('@') && 
              e.target.value.includes('.') && 
              e.target.value.indexOf('@')!==0 && 
              e.target.value.length - e.target.value.lastIndexOf('.') >2 &&  e.target.value.length - e.target.value.lastIndexOf('.') <=4 &&
              e.target.value.charAt(e.target.value.length-1)!== '.'){
                setError((previousError)=>({
                  ...previousError,
                  email:false
                 }))
              }else{
                setError((previousError)=>({
                  ...previousError,
                  email:true
                 }))
            }
          }}
             
            />
            {submit && !success &&(error.email ? 
            (<Form.Control.Feedback type="invalid"> Please choose a valid email.</Form.Control.Feedback>)
          : ( <Form.Control.Feedback>Looks good!</Form.Control.Feedback>))}
           
            
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom03">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" 
          value={userDetails.password}
          onChange={(e)=>{
            setUserDetails({
              ...userDetails,
              password:e.target.value
          })
          if(e.target.value.length>=8){
            setError((previousError)=>({
              ...previousError,
              password:false
             }))
          }else{
            setError((previousError)=>({
              ...previousError,
              password:true
             }))
          }
        }
        }
          />
          {submit && !success &&(error.password ? 
            (<Form.Control.Feedback type="invalid"> Please choose a valid password.</Form.Control.Feedback>)
          : ( <Form.Control.Feedback>Looks good!</Form.Control.Feedback>))}
           
        </Form.Group>
        
        <Form.Group as={Col} md="4" controlId="validationCustom04">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password"
          value={userDetails.confirm_password}
          onChange={(e)=>{
            setUserDetails({
              ...userDetails,
              confirm_password:e.target.value
          })
          if(e.target.value.length>=8){
            setError((previousError)=>({
              ...previousError,
              confirm_password:false
             }))
          }else{
            setError((previousError)=>({
              ...previousError,
              confirm_password:true
             }))
          }
          
          }
        }
           />
          
          {submit && !success &&(error.confirm_password ? 
            (<Form.Control.Feedback type="invalid"> confirm password should same with password.</Form.Control.Feedback>)
          : ( <Form.Control.Feedback>Looks good!</Form.Control.Feedback>))}
           
        </Form.Group>

      </Row>

      <Button variant="dark" type="submit" onClick={onSubmit} >Submit form</Button>
    </Form>
    </>
  )
}

export default Signup