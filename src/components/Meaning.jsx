import React from 'react'
import { FaVolumeUp } from "react-icons/fa";

const Meaning = ({wordMeaning}) => {
  
  const {meanings,phonetic,word,phonetics} = wordMeaning
  const sound = document.getElementById('audio') ;

  sound.setAttribute('src',`${phonetics[0].audio ? phonetics[0].audio : ""}`)
  
  function playSound()
  {
    sound.play();
  }

  return (
    <>
       <div className='search-word'>
            <div>
                <h3>{word}</h3>
                <p>{meanings[0].partOfSpeech}{phonetic}</p>
            </div>
            <div>
                <FaVolumeUp onClick={playSound} className='audio-icon' />
            </div>
       </div> 
       <div className="description">
            <p>{meanings[0].definitions[0].definition}</p>
       </div>
       <div className="example">
            <p>{meanings[0].definitions[0].example ? meanings[0].definitions[0].example : "Example not avaialble"}</p>
       </div>

    </>
  )
}

export default Meaning