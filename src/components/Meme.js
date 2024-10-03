import React from 'react'
import new1 from '../images/Get a new meme image 🖼.png'
import memesData from '../memesData'
// import memeImage from '../images/memeimg.png'

export default function Meme() {

    // Refactoring our useState start

    // const [memeImage, setMemeImage] = React.useState("https://i.imgflip.com/323b1gx.jpg")
    const [meme, setMeme] = React.useState ({
        topText: "",
        bottomText:"",
        randomImage: "https://i.imgflip.com/323b1gx.jpg"
    })
    const [allMemeImages] = React.useState(memesData)

    // let url 
    function getMemeImage() {
        const memeArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memeArray.length)
        const url = memeArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }) )

    // Refactoring our useState end 


        // url = memeArray[randomNumber].url
        // console.log(url)
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme, 
            [name] : value 
        }))
    }
  return (
    <main>
          {/* <p>{url}</p> */}
        <div className='form'>
            <input type='text'  placeholder='Top text' className='form--input' name='topText' value={meme.topText} onChange={handleChange}/>
            <input type='text'  placeholder='Bottom text'  className='form--input' name='bottomText' value={meme.bottomText} onChange={handleChange}/>
            <button className='form--button'onClick={getMemeImage}><img src={new1} alt='new-image' className=''/></button>
        </div>
        <img src={meme.randomImage} alt='memeImage' className='meme--image'/>
        <h2 className='meme--text top'>{meme.topText}</h2>
        <h2 className='meme--text top'>{meme.bottomText}</h2>
        
    </main>
  )
}
