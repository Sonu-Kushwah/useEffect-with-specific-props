import React, { useEffect } from 'react'

function User(props) {
    useEffect(()=>{
        alert(`Count1 is ${props.count1}`);
    },[props.count1])
  return (
    <>
    <h4>Count 1:{props.count1}</h4>
    <h4>Count 2:{props.count2}</h4>
    </>
  )
}

export default User