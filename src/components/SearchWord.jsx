import React from 'react'

           
const SearchWord = ({getWordMeaning,setWord}) => {
  return (

    <form onSubmit={getWordMeaning}  className='search-box'>
        <input 
        type="text" 
        placeholder='Enter the word'
        onChange={(e)=>{setWord(e.target.value)}}
        />
        <button>Search</button>
    </form>

  )
}

export default SearchWord