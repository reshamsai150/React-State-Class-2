import { useState } from "react";
export default function Form(){
     let [formData,setFormData] = useState({
         fullName: "",
         username: "",
         password: "",
     });

//      let handleNameChange=(event) =>{
// setFullname(event.target.value);
// };

// let handleUsername=(event) =>{
//      setUsername(event.target.value);
//      };

let handleInputChange=(event) =>{
     let fieldName=event.target.name;
     let newValue=event.target.value;
 setFormData( (currData) => {
   return {...currData,[fieldName]:event.target.value};
 });
};

let handleSubmit=(event)=>{
     event.preventDefault();
     console.log(formData);
     setFormData({
           fullName: "",
         username: "",
     });
}

    return(
     <form onSubmit={handleSubmit}>
          <label htmlFor="fullName">Full Name</label>
        <input placeholder="enter your full name" type="text"
        value={formData.fullName} onChange={handleInputChange} 
        id="fullName" name="fullName"/><br></br>
        <br></br>
         <label htmlFor="userame">User Name</label>
        <input placeholder="enter user name" type="text"
        value={formData.username} onChange={handleInputChange} 
        id="username" name="username"/>
        <br></br>
         <label htmlFor="password">password</label>
        <input placeholder="password"
         type="password"
        value={formData.password} 
       
        id="password"
         name="password" 
         onChange={handleInputChange} />
        <button>Submit</button>
     </form>
     );
}