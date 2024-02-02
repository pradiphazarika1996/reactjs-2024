import './App.css'
import BgChanger from './components/BgChanger';
// import Card from './components/Card';


function App() {
  
const myObj = {
  name:"pradip",
  age:25

}
const newArr = [1,2,3,4]
  return (
    <>
  {/* <h2 className='bg-green-400 text-black p-5 rounded-xl'>Tailwind props</h2>
 <Card username="pradip" someObj = {myObj} myArray = {newArr} btnText="click me" />
 <Card username="rahul"  /> */}
 <BgChanger />
    </>
  )
}

export default App
