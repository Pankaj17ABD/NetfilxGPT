import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router';
import { addUser, removeUser } from '../utils/uerSlice';
import { useDispatch } from 'react-redux';
import { LOGO, PHOTO_URL } from '../utils/Constants';
import { useSelector } from 'react-redux';

const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const userData=useSelector(state =>state.user)
    // console.log(userData.photo_url,"......")
    const handleSignout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            dispatch(removeUser())
            navigate("/")
        }).catch((error) => {
            // An error happened.
        });
    }


  
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
        //   console.log(123)
          const { uid, email, displayName } = user;
          dispatch(addUser({ uid: uid, email: email, displayName: displayName,photo_url:PHOTO_URL }))
          navigate("/browse")
        } else {    
          // User is signed out
          dispatch(removeUser())
          navigate("/")
        }
      });
    }, [])

    return (
        <div className='absolute px-8 py-2 bg-gradiant-to-b z-10 w-screen flex justify-between'>
            <img className=' w-40' alt="Logo" src={LOGO} />

           { userData&& <div className="flex p-2">
               { <img className=' w-12 h-12' alt="Logo" src={userData?.photo_url} />}
                <button onClick={handleSignout} className='font-bold text-white'>Sign Out</button>
            </div>}
            
        </div>

    )
}

export default Header   