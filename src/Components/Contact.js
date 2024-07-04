import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
    <div className='container'>
      <form action="/action_page.php">
  <div class="form-group py-4 my-3">
    <label for="email">Email address:</label>
    <input type="email" class="form-control " placeholder="Enter email" id="email"/>
  </div>
  <div class="form-group">
    <label for="pwd">Password:</label>
    <input type="password" class="form-control" placeholder="Enter password" id="pwd"/>
  </div>
  <div class="form-group form-check">
    <label class="form-check-label">
      <input class="form-check-input" type="checkbox"/> Remember me
    </label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>

    </div>
  )
}

export default Contact
