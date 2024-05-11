
import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import appStore from './utils/store';
import { RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import Browse from './components/Browse';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from './utils/uerSlice';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/browse",
      element: <Browse />
    }
  ])


  return (
    <Provider store={appStore}>
      <RouterProvider router={router}>
        <Body />
      </RouterProvider>
    </Provider>
  );
}

export default App;
