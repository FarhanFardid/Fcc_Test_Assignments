
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [quote,setQuote] = useState("");
  const [author,setAuthor] = useState("");

  useEffect(()=>{
    fetchQuote();

  },[]);

  const fetchQuote =()=>{
    fetch("https://api.quotable.io/random")
.then(res=> res.json())
.then(data =>{
setQuote(data.content);
console.log(data.content);
setAuthor(data.author); 
})
  }

  return (
    <>
<div >
  <div id="quote-box"> 
   <div id="text">{quote}
    </div>
    <div id="author">
-{author}
    </div>
    <div><a href="https://twitter.com/intent/post"  target='_blank' id="tweet-quote">Tweet</a>
    <button id="new-quote" onClick={fetchQuote} type="submit">New Quote</button>
    </div>
    
    </div>

  </div>      
    </>
  )
}

export default App
