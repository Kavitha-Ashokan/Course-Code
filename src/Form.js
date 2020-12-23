import React,{useState} from 'react'
import './form.css';

 const Form = () => {
    const [name,setName] = useState("")
    const [desig,setDesig] = useState("")
    const [check,setCheck] = useState(false)
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("values",name,desig)
        setCheck(true)
        
    }
    return (
        <div>
            <center>
                <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" 
                placeholder="Enter Your Name" 
                onChange={(e)=>setName(e.target.value)} 
                required/><br/><br/>
                <label>Designation</label>
                <input type="text"
                 placeholder="Enter Your Designation" 
                 onChange={(e)=>setDesig(e.target.value)} 
                 required/><br/><br/>
                 <button type="submit">Submit</button>
                 {check&& 
                 <h3>Welcome! -{name}<br/>{desig}</h3>
                 }
            </form>
            </center>
        </div>
    )
}
export default Form;
