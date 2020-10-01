
// import React from 'react';
// import ReactDOM from 'react-dom';
// // Step 1. Import react-router functions
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
 
// // const Home = () => {
// //   return (
// //     <div>
// //       <h1>Home!</h1>
// //     </div>
// //   );
// // };
// const link = {
//   width: '100px',
//   padding: '12px',
//   margin: '0 6px 6px',
//   background: 'blue',
//   textDecoration: 'none',
//   color: 'white',
// }
// const About = () => {
//   return (
//     <div>
//       <h1>This is my about component!</h1>
//     </div>
//   );
// };
// const Login = () => {
//   return (
//     <div>
//       <form>
//         <div>
//           <input type="text" name="username" placeholder="Username" />
//           <label htmlFor="username">Username</label>
//         </div>
//         <div>
//           <input type="password" name="password" placeholder="Password" />
//           <label htmlFor="password">Password</label>
//         </div>
//         <input type="submit" value="Login" />
//       </form>
//     </div>
//   );
// };
 
// // Step 2. Changed to have router coordinate what is displayed
// ReactDOM.render((
//   <Router>
//     <div>
//       <Route exact path="/" render={() => <h1>Home!</h1>} />
//       <Route exact path="/about" component={About} />
//       <Route exact path="/login" component={Login} />
//     </div>
//   </Router>),
//   document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home'
import About from './About'
import Login from './Login'
import Navbar from './Navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom';
 
ReactDOM.render((
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </div>
  </Router>),
  document.getElementById('root')
);
