import axios from 'axios';
import React, { useRef } from 'react'
import './_profile.scss'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"

const Profile = () => {
  
  const { register, handleSubmit, formState: { errors } } = useForm()
  
  
  const navigate = useNavigate()
  const profileData = JSON.parse(localStorage.getItem('Profile'))
  const name = useRef(profileData.name)
  const birth = useRef(profileData.birth)
  const email = useRef(profileData.email)
  const phone = useRef(profileData.phone)
  if (!profileData) return;
  const onSubmit = async (data) => {
    const res = await axios.post(`http://localhost:4000/api/updateprofile/${profileData._id}`,  {
      name: name.current,
      birth: birth.current,
      email: email.current,
      phone: phone.current
    })
    if (res.data.status === 200){
      localStorage.setItem('Profile', (JSON.stringify(res.data.data)))
    }
    toast.success("Update Susseccful!", {position: toast.POSITION.TOP_RIGHT})
  }
  const cancelUpdate =  () => {
    localStorage.removeItem('Profile')
    navigate('/')
  }

  

  return (
    <div className='profile'>
        <h2>Profile</h2>
          <form onSubmit={handleSubmit(onSubmit)}> 
              <label>Full name:</label>
              <input defaultValue={name.current} 
              onChange={(event)=> {name.current = event.target.value}}
              {...register("name",{required:'Full name is required', minLength: 2, maxLength: 30, pattern: /^[A-Za-z]+$/i})}
              />
              {errors.name && <span style={{color: 'red'}}>{errors.name.message}</span>}
              <br></br>
              <label>Day Of Birth:</label>
              <input defaultValue={birth.current} 
              onChange={(event)=> {birth.current = event.target.value}}
              {...register("birth",{required: 'Birth is required'})}
              />
              {errors.birth && <span>{errors.birth.message}</span>}
              <br></br>
              <label>Email:</label>
              <input type='email' defaultValue={email.current} 
              onChange={(event)=> {email.current = event.target.value}}
              {...register("email", {
                required: "required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Entered value does not match email format"
                }
              })}
              />
              {errors.email && <span>{errors.email.message}</span>}
              <br></br>
              <label>Phone:</label>
              <input  defaultValue={phone.current} 
              onChange={(event)=> {phone.current = event.target.value}}
              {...register("phone",{ required: 'Phone is required', minLength: 10, maxLength: 10})}
              />
              {errors.phone && <span>{errors.phone.message}</span>}
              <div className='btn'>
                <button className='btnUpdate' type='submit'>Update</button>
                <button className='btnCancel' onClick={cancelUpdate}>Cancel</button>
              </div>
                  
          </form>
    </div>
  )
}

export default Profile