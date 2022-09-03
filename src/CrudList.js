import React from 'react'

export const CrudList = (props) => {
  const removeData = (e) =>{
    console.log(e.target.id)
    const filteredArray = props.userData.filter((item) =>{

      return (
        item.id  === e.target.id
        )
    })
    props.setUserData(filteredArray)
  }
  return (
    <table>
  <tr>
    <th>Name</th>
    <th>Email</th>
    <th>password</th>
    <th>Phone Number</th>
  </tr>
  {
    props.userData.map((item, indx) => {
      
     return( 
     <tr>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.password}</td>            
      <td>{item.Phone}</td>
      <button id={indx+1} onClick={removeData}>Remove</button>
      <button>Edit</button>
    </tr> 
    )

    })
  }
</table>
  )
}
