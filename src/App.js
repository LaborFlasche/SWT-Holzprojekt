import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App() {

  const [img, setImg] = useState('')
  const [previewImg, setpreviewImg] = useState('')
  const imgHandler = (event) => {
  console.log(event.target.files)
    setImg(event.target.files[0])
    setpreviewImg(URL.createObjectURL(event.target.files[0]))
  }
   const checkingHandler = () => {
   const formData = new FormData()
    formData.append('img', img)

    axios.post("http://localhost:8000/upload/", formData, {headers: {'content-type': img.type}}).then((res) => console.log(res))
   }
  return (
    <div className="App">
      <input type="file" className="form-control" name="upload_file" onChange={imgHandler}/>
      <div className="container">
      <div className="imgBox">
      <img src={previewImg}/>
      </div>
      </div>
      <button onClick={checkingHandler}>Check Image for Alpakas</button>
    </div>
  );
}

export default App;
