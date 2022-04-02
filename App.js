/*
    last change by Rena Kollmann-Suhr March 31st 2022
    App.js uses Apps.css in react_web_app_scratch

    App.js is a React web app that reads JSON data from a free online REST api
    and currently displays an image and un-clickable button.

    Future changes needed:

        - add dependency to useEffect to control which prop.id selected from JSON data
        - create horizontally scrollable list of images
        - implement recursive function that randomizes order of images in scrollable list
        - cache data retrieved from JSON file
*/

import './App.css';
import {useEffect, useState} from "react";

export default function App() {
    //use useState hook to track functions
    //data is the current state, setData is function used to update state
    const [data, setData] = useState(null); //sets initial state to null
    const [loading, setLoading] =useState(true); //sets initial state to true
    const [error, setError] = useState(null); //sets initial state to null


  //use useEffect hook to fetch data from online REST api
  useEffect(() => {

        //fetches data from JSON file in api
        fetch('https://jsonplaceholder.typicode.com/photos/1')
            //returns JSON data if response ok
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw response;
            })

            //track JSON data retrieved and update state
            .then(data => {
                setData(data);
            })

            //catch error
            .catch(error => {
                console.error("Error fetching data: ", error);
                setError(error);

                //if no error caught, remove "Loading" message
            })
            .finally(() => {
                setLoading(false);
            })

  }, []) //useEffect runs only on first render since there are no dependencies

  //messages to display depending on what state detected
  if (loading) return "Loading..."
  if (error) return "Error..."

  //return and display JSX elements and CSS styling
  return (
      <div class="image-shadow">
          <img src = {data.url} alt="json placeholder"/>
          <div class="title">{JSON.stringify(data.title)}</div>
          <button class="button">Randomize (feature not complete)</button>
      </div>
  )

};
