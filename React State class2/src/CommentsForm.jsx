import React, { useState } from 'react';
export default function CommentsForm(addNewComment){
    let [formData,setFormData]=useState({
        username:"",
        remarks: "",
        rating: 5,
    });
    let handleInputChange = (event)=>{
    setFormData((currData)=>{
        return {...currData,[event.target.name]: event.target.value };
    });
    };
    let handleSubmit = (event)=>{
        console.log(formData);
        addNewComment(formData);
        event.preventDefault();
        setFormData({
            username:"",
            remarks: "",
            rating: 5,
        });
    };
 
     return (<div>
        <h4>Give a comment!</h4>
        <form onSubmit={handleSubmit} action="">
            <label htmlFor="username">Username</label>
            <input  placeholder="username" type="text" value={formData.username} onChange={handleInputChange} 
            id="username" name="username"/>
            <br></br><br></br>

            <label htmlFor="remarks">Remarks</label>
            <textarea  value={formData.remarks} placeholder="add few remarks" onChange={handleInputChange}
            id="remarks" name="remarks" >
            
            </textarea>
            <br></br><br></br>

<label htmlFor="rating">Rating</label>
            <input type="number" placeholder="rating" min={1} max={5} value={formData.rating} onChange={handleInputChange}
            id="rating" name="rating"/>
            <br></br><br></br>

            <button>Add comment</button>
        </form>
     </div>)
}