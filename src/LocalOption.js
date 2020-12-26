import React,{useState,useEffect} from 'react'

var options1;

const LocalOption = () => {
    const[option,setOption]=useState("");
    let[options,setOptions]=useState([]);
    const[error,setError]=useState('');
    useEffect(()=>{
        options1=  JSON.parse(localStorage.getItem("value")) || [];
        setOptions(options1)},[])
    
     const AddValue=(e)=>{
        e.preventDefault();  
       options1.push(option)
       localStorage.setItem("value",JSON.stringify(options1));
       options1=  JSON.parse(localStorage.getItem("value"));
       setOption("");
       setOptions(options1);   
}
const removeAll=(e)=>{
    localStorage.setItem("value",JSON.stringify([]));
    setOptions([]);   
    e.preventDefault();
}
const remove=(option1)=>{
       
    options= options.filter((option)=>{
             return   option1!==option
         })
    localStorage.setItem("value",JSON.stringify(options));
    setOptions(options);
        
 }
    return (
        <div >
            <h1>Local Storage</h1>
            <form autoComplete="off">
                <input type="text" name="option" value={option} onChange={(e)=>setOption(e.target.value)}/>
                <button onClick={AddValue} >Submit</button>
                <button onClick={removeAll} >Remove All</button>
            </form>
            {error && <div>{error}</div> }
            {options.length!==0 &&
            options.map((option)=>{
               return <div  key={option}><p >{option}</p> <button onClick={()=>remove(option)}>Remove</button></div>
            })}
        </div>
    )
}

export default LocalOption;