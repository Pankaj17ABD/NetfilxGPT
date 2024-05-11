import React, { useEffect } from 'react'
import Header from './Header'
import Login from './Login'
import { onAuthStateChanged } from 'firebase/auth'
import { addUser, removeUser } from '../utils/uerSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { auth } from '../utils/firebase'

const Body = () => {
 
  return (
    <div>
       <Login/>
    </div>
  )
}

export default Body