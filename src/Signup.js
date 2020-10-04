import React, { Component } from 'react'

export class Signup extends Component {
    render() {
        return (
            <div>
              <form>
<h1>Signup</h1>
<div>
  <input type="text" name="username" placeholder="Username" />
  <label htmlFor="username">Username</label>
</div>
<div>
  <input type="password" name="password" placeholder="Password" />
  <label htmlFor="password">Password</label>
</div>
<input type="submit" value="Signup" />
</form>
            </div>
        )
    }
}

export default Signup
