import React,{useState} from 'react'
import { CrudList } from './CrudList'

export const InputFrom = () => {
  const [userData, setUserData ] = useState([])
  let setId = userData.length;
    const [userInput, setuserInput] = useState({
      name: "", email: "", password: "", Phone: "", id: ""
    })
    let name, value;
    const handleInputs= (e) => {
       name = e.target.name;
       value = e.target.value;
       setuserInput({ ...userInput, [name]:value, id:setId+1});
       setId += 1
    }
    function submitData(e){
      e.preventDefault();
      setUserData([...userData, userInput])
    }
   
  return (
    <>
    <form onSubmit={submitData}>
    <input value={userInput.name}  name="name" onChange={handleInputs}/>
    <input value={userInput.email}  name="email" onChange={handleInputs}/>
    <input value={userInput.password}  name="password" onChange={handleInputs}/>
    <input name="confirm-password"/>
    <input value={userInput.PhoneNumber}  name="Phone" onChange={handleInputs}/>
    <input type="Submit" value="Submit Dnata" />
    </form> 
    <CrudList setUserData={setUserData} userData={userData}/>
    </>
  )
}
