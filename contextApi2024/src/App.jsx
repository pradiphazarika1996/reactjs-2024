
import './App.css'
import Login from './components/Login';
import Profile from './components/Profile';
import UserContextProvider from './context/UserContextProvider';



function App() {
 

  return (
    <UserContextProvider>
      <h2>learn contextapi in react js</h2>
      <Login />
      <Profile />
     
    </UserContextProvider>
  )
}

export default App
