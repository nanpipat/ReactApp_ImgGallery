import React , {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Images from './Images'

function App() {
  const [selectedImg , setSelectedImg] = useState(Images[0])
  return (
    <div className="App">
     <div className="container">
       <img src={selectedImg} alt="selected" className="selected" />
       <div className="imgContainer">
         {Images.map((img,index) => (
          <img style={{border: selectedImg == img ? "4px solid rgb(3, 170, 170)" : ""}} key={index} src={img} alt="rvv" onClick={() => setSelectedImg(img)} />
         ))}
         
       </div>
     </div>
    </div>
  );
}

export default App;
