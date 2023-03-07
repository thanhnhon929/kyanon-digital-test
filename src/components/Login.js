import axios from 'axios'
import React, { useRef } from 'react'
import { useState } from 'react'
import './_login.scss'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Login = () => {
  const navigate = useNavigate()
  const [isShow, setIsShow] = useState('password')
  const email = useRef()
  const password = useRef()
  const toogleShow = () => {
    isShow === 'password' ? setIsShow('text') : setIsShow('password')
  } 
  const signIn = async () => {
    if(!email && !password) 
      return 
      else {
        const acc = await axios.post('http://localhost:4000/api/login', {
          email, 
          password
        })
        if (acc.data.status === 200) {
          localStorage.setItem('Profile', (JSON.stringify(acc.data.data)))
          toast.success("Login Susseccful!", {position: toast.POSITION.TOP_RIGHT})
          navigate('Profile')
        }
      }
  }
  return (
      <div className='login'>
          <h2>Login</h2>
          <form> 
              <label>Email:</label>
              <input type="email"  placeholder='example@kyanon.digital' 
              onChange={(event) => {email.current = event.target.value}}/>
              <br></br>

              <label>Password:</label>
              <input type={isShow} placeholder='password' className='show'
              onChange={(event) => {password.current = event.target.value}}/>

              <div className='check-submit'>
                  <input type='checkbox' onClick={toogleShow}/>
                  <label> Show Password</label>
                  <input type="button" value="Sign in" className= 'submit' onClick={signIn}/>
              </div>
                  
          </form>
      </div>
  )
}

export default Login