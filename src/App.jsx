/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import './App.css'
import Counter from './counter'
import Friends from './Friends'
import Team from './Team'
import Users from './Users'
function App() {


  function handleClick(){
    alert('Button cliked')
  }

  const handleClick2=()=>{
    alert('Button 2 Clicked')
  }

  const addToFive=(num)=>{
    alert(num+5)
  }

  return (
    <>
      <h2>React Core Concepts 2</h2>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>

      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={()=>{alert('Third Clicked')}}>Click 3</button>
      <button onClick={()=>addToFive(3)}>Button 4</button>
    </>
  )
}

export default App
