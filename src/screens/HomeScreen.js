import React from 'react'
import img1 from '../pictures/1.jpg'
export default function HomeScreen() {
    return (
        <>
            <div>
                <img src={img1} className='imageSet'></img>
                <div className='headingArea'>
                    <h1>LinkSpot</h1>
                </div>
                <div className='divInputText'>
                    <input type={'text'} className='textInput'></input>
                    <button className='btnGenerate'>Generate</button>
                </div>
                <span className='dateAdj'>
                    <h3 className='headinExpiry'>Expiry Date </h3>
                <input type={'date'} className='datesize'></input>
                </span>
                <span className='buttonArea'>
                    <button className='btnResult'>Shorten Link Result</button>
                    <button className='btnClipboard'>Copy to Clipboard</button>
                    <button className='btnHistory'>History</button>
                </span>
            </div>
        </>
    )
}
