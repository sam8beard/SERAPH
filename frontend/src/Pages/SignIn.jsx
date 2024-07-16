import React from 'react';
import './SignIn.css'; 
import { Col, Row, Card, Button } from 'react-bootstrap';
import seraph_logo from '../assets/seraph_logo.png';
import dod_logo from '../assets/DOD_Logo.png';
import { Link } from 'react-router-dom';

function SignIn() {

  return (
    <div className="sign-in-parent"> 

      <div className="header-group"> 
        <div> 
          {/* <h1> Welcome to S E R A P H</h1> */}
        </div> 
          
      </div>

      <div className="content-group"> 
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
          
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
          </div>
          

          <div className="submit-group"> 
            <div> 
              <Button variant="primary" as={Link} to={`/dashboard`} className="cg-edit-button" text="Sign In">
                Sign In
              </Button>
              {/* <button type="submit" className="btn btn-primary">Sign In</button> */}
            </div>
            
          </div>
      
        </form> 
      </div> 

      
    </div>
    
  );
}

export default SignIn;
