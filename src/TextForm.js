import React from 'react'

export default function TextForm(props) {
  return (
//       <div class="mb-3">
//   <label for="exampleFormControlInput1" class="form-label">Email address</label>
//   <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
// </div>
    <div class="mb-3">
        <h1>{props.heading}</h1>
        
        <textarea class="form-control" id="Box" rows="8"></textarea>
    </div>
  )
}
