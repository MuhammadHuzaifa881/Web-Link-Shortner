import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import img1 from '../pictures/1.jpg'
import History from './History';
import ShortenLink from './ShortenLink';
export default function HomeScreen() {
    // first we create state by using UseState  for website and epiry date to store data in local storage
    const [originalWebsite, setOriginalWebsite] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const HandlemeWitCare = () => {
        localStorage.setItem('originalWebsite', JSON.stringify(originalWebsite))
        localStorage.setItem('expiryDate', expiryDate)
    }

    return (
        <>
            <div>
                <img src={img1} className='imageSet'></img>
                <div className='headingArea'>
                    <h1>LinkSpot</h1>
                </div>
                <div className='divInputText'>
                    <input type={'text'} className='textInput' placeholder='Paste your link here' value={originalWebsite} onChange={(e) => setOriginalWebsite(e.target.value)}></input>
                    <button className='btnGenerate' onClick={HandlemeWitCare}>Generate</button>
                </div>
                <span className='dateAdj'>
                    <h3 className='headinExpiry'>Expiry Date </h3>
                    <input type={'date'} className='datesize' value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)}></input>
                </span>
                <span className='buttonArea'>
                    <Link to="/shortenlink" className='ResultLink'>Shorten Link Result</Link>
                    <Link to="/History" className='ClipboardLink'>Copy to Clipboard</Link>
                    <Link to="/History" className='HistoryLink'>History</Link>
                </span>
            </div>
        </>
    )
}
