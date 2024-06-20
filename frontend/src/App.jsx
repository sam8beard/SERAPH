import React from 'react';
import './signinstyle.css'; // Assuming App.css contains necessary styles

// Import images (adjust paths based on your actual directory structure)
import image1 from './assets/image 1.png';
import rectangle11 from './assets/Rectangle 11.png';
import image4 from './assets/image 4.png';
import image8 from './assets/rectangle-8.png'; // Import image-8 background

function App() {

  return (
    <div className="sign-in">
      <div className="overlap-group-wrapper">
        <div className="overlap-group" style={{ backgroundImage: `url(${image8})` }}>
          <img className="image" alt="Image" src={image1} />
          <img className="rectangle" alt="Rectangle" src={rectangle11} />
          <p className="text-wrapper">S E R A P H</p>
          <div className="div" />
          <div className="rectangle-2" />
          <div className="text-wrapper-2">Username</div>
          <div className="text-wrapper-3">Password</div>
          <div className="rectangle-3" />
          <div className="rectangle-4" />
          <div className="text-wrapper-4">Login</div>
          <div className="text-wrapper-5">CAC SSO</div>
          <img className="img" alt="Image" src={image4} />
        </div>
      </div>
    </div>
  );
}

export default App;
