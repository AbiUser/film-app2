import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { ShowCard } from '../../components';
//useParams - grabs dynamic parameters of the route
//useParams() - will return an object

export default function Showpage() {
    const [show,setShow] = useState({image:{}, rating: {}}); //initialise with empty object as data is an object
    const {id}  = useParams(); //grabs key of id in object in useParams
    useEffect(() => {
        async function displayShow() {
            const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
            const data = await response.json();
            // console.log(data)
            setShow(data)
        }
        displayShow();
    }, [])
  return (
    <ShowCard show={show}/>
  )
}