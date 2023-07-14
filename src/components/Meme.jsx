
import React, { useEffect, useState } from "react";





function Meme() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemesImages, setAllMemesImages] = useState([])

    useEffect(() => {
       fetch("https://api.imgflip.com/get_memes")
       .then(res => res.json())
       .then(data =>setAllMemesImages(data.data.memes) )
    },  [])

    
    

  
    const GetMemeImage = () => {
  
      const randomNumber = Math.floor(Math.random() *allMemesImages.length);
      const url=allMemesImages [randomNumber].url
      setMeme(prevMeme => ({
        ...prevMeme,
        randomImage :url
      }));
    }

     function handlechange(event){
        const {value, name} = event.target
       setMeme(prevMeme =>({
        ...prevMeme, [name]:value

       }))
     }
        return (

            <main className="main-container" >
                 

                <div className="form">
                    <input 
                    className="form-input"
                    type="Text"
                    placeholder="Top text"
                    name="topText"
                    value={meme.topText}
                    onChange={handlechange}
                    />

                    <input
                    className="form-input"
                    type="Text"
                    placeholder="Bottom text" 
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handlechange}
                    />

                    <button className="form-button" onClick={GetMemeImage}>Get a new image</button>
                </div>
                <div className="meme">
                <img src={meme.randomImage} className="meme-image"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
                
                </div>
                
                
            
        </main>
            



        )
    }

export default Meme