import React from 'react'

export const HeaderComponent = (props) => {
  console.log("header props", props);
  return (
    <div>
      CART COUNTV = 
      {props?.cart.cart.length}
      {
        props?.cart.cart.map((item) => {
          return <div>{item.name}</div>
        })
      }
    </div>
  )
}
