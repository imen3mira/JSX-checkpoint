import imageInSrc from './imageInSrc.jpg' ;
import './style.css';
// import myVideo from './myVideo.mp4'
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <div style={{ border:'solid 1px black', maxWidth:  '100vw' }} >   
 
 <h1 className = "title red"> Votre nom ici </h1>   

   
<br />
       <img src = {imageInSrc}/>  <br />

          <img src = {"/imageInPublic.jpg" }/> 

</div>   

<video width = "320" height = "240" controls>   

   {/* <source src = {myVideo} type = "video/mp4"/>  */}

</video>
    </div>
  );
}

export default App;
