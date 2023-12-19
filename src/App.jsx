import './App.css'
import Meaning from './components/Meaning'
import SearchWord from './components/SearchWord'
import { useState } from 'react';

function App() {

  const [Word, setWord] = useState("");
  const [wordMeaning, setwordMeaning] = useState([]);
  const [Error, setError] = useState(false);

  function getWordMeaning(e)
  {
    if(Word === "")
    {
      return alert("Please Enter Word");
    }
    e.preventDefault();
    
    const res = fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${Word}`);

    res.then(response => {
      return response.json();
    }).then(data => {

      if(data && data[0])
      { 
        setError(false)
        setwordMeaning(data[0]);
      }
      else
      {
        setError(true);
        setwordMeaning([]);
      }
    }).catch(err =>{
      console.log(err);
    })

  }

  

  return (
    <div className='container'>
        <audio id='audio'></audio>
        <div className="Dictionary-app">
           <SearchWord getWordMeaning={getWordMeaning} setWord={setWord} />
           {Error ? <h3 className='error'>Couldn't find the word</h3> : ""}
           {wordMeaning.length===0 ? null : <Meaning wordMeaning={wordMeaning} />}
        </div>
    </div>
  )
}

export default App
