import React, { useState } from "react";

const Player = ()=>{

    // let backBackground = 'green'÷

    const [backBackground, setBackBackground] = useState('grey')
    const [playBackground, setPlayBackground] = useState('grey')
    const [stopBackground, setStopBackground] = useState('grey')
    const [nextBackground, setNextBackground] = useState('grey')
    

    function back(){
        console.log('back')
        if( backBackground == 'green' ){
            setBackBackground('grey') /// backBackground = 'grey
        }else{
            setBackBackground('green')
            // pasa play a gris
            setPlayBackground('grey') /// backBackground = 'grey
            setNextBackground('grey') 
            setStopBackground('grey')
        }
    }

    function play(){
        console.log('back')
        if( playBackground == 'green' ){
            setPlayBackground('grey') /// backBackground = 'grey
        }else{
            setPlayBackground('green')
            setBackBackground('grey') 
            setNextBackground('grey') 
            setStopBackground('grey')
        }
    }

    function stop(){
        console.log('stop')
        if( stopBackground == 'green' ){
            setStopBackground('grey') /// backBackground = 'grey
        }else{
            setStopBackground('green')
            setBackBackground('grey') 
            setNextBackground('grey') 
            setPlayBackground('grey')
        }
    }

    function next(){
        console.log('next')
        if( nextBackground == 'green' ){
            setNextBackground('grey') /// backBackground = 'grey
        }else{
            setNextBackground('green')
            setBackBackground('grey') 
            setStopBackground('grey')
            setPlayBackground('grey')
 
        }
    }
    return(
        <>
            <h1>Player</h1>
            <button onClick={back} style={{backgroundColor: backBackground}}>anterior</button>
            <button onClick={play} style={{backgroundColor: playBackground}}>play</button>
            <button onClick={stop} style={{backgroundColor: stopBackground}}>stop</button>
            <button onClick={next} style={{backgroundColor: nextBackground}}>siguiente</button>
        
        </>
    )
}

export default Player