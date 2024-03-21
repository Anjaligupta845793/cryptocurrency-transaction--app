import React from 'react'
import { useState,useEffect } from 'react';

export const useFetch = ({keyword}) => {
  const [gifurl, setgifurl] = useState("");
  const fetchabi = async() => {
    try {
      const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=1fGbLRU6Xhz9FpF5ctcJTwOc9UQndzwd&q=${keyword}&limit=1`);
    const  {data} = await response.json();
    setgifurl(data[0]?.images?.downsized_medium.url);
    } catch (error) {
      console.log(error)
    }


  }
  useEffect(() => {
    if(keyword) fetchabi();
  
   
  }, [keyword])
  
  return (
    gifurl
  )
}

