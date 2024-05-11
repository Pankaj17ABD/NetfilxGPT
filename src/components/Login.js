import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/Validation'
import { auth } from "../utils/firebase"
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword, updateProfile} from 'firebase/auth'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/uerSlice'
import { PHOTO_URL } from '../utils/Constants'
const Login = () => {
    const [isUser, setIsUser] = useState(true)
    const [validationError, setvValidationError] = useState(null)
    const password = useRef(null)
    const email = useRef(null)
    const name = useRef(null)
    // const navigate=useNavigate()
    const dispatch = useDispatch()
    const toggleSignInForm = () => {
        setIsUser(!isUser)
    }
   
    const handleClick = async () => {
        const msg = checkValidData(email.current.value, password.current.value)
        setvValidationError(msg)
        if (msg) return;
        if (!isUser) {
           await createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: PHOTO_URL
                      }).then(() => {
                        // Profile updated!
                        const { uid, email, displayName,photoURL } = auth.currentUser;
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName ,photoURL:photoURL}))
                        // navigate("/browse")
                      }).catch((error) => {
                        // An error occurred
                        // ...
                      });
                     // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setvValidationError(errorCode + "-" + errorMessage)
                    // ..
                });
        } else {
            signInWithEmailAndPassword(auth,email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // navigate("/browse")
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setvValidationError(errorCode + "-" + errorMessage)
                });
        }
    }

    return (
        <div>
            <Header />
            <div className='relative'>
                <img className="w-full h-full" alt="background Logo" src="https://img.freepik.com/free-photo/colorful-wallpaper-background-multicolored-generative-ai_91128-2257.jpg" />
                <form onSubmit={(e) => e.preventDefault()} className=' bg-opacity-75 rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/12 p-12 bg-black text-white'>
                    <h1 className='font-bold text-3xl py-4'>{isUser ? "Sign In" : "Sign Up"}</h1>
                    {!isUser && <input ref={name} type="text" placeholder="User Name" className='p-4 my-2 w-full bg-gray-700' />}
                    <input ref={email} type="text" placeholder="Email Address" className='p-4 my-2 w-full bg-gray-700' />
                    <input ref={password} type="password" placeholder="Password" className='p-4 my-2 w-full bg-gray-700' />
                    <p className='font-bold text-xl py-4 text-red-700'>{validationError}</p>
                    <button onClick={handleClick} className='p-4 my-6 w-full bg-red-700'>{isUser ? "Sign In" : "Sign Up"}</button>
                    <p className="font-bold text-xl py-4 cursor-pointer" onClick={toggleSignInForm}>
                        {!isUser ? "Already a User -- Sign In" : "New to Netflix -- Sign Up"}
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login