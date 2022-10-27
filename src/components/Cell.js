import React from 'react'
import useSound from 'use-sound';
import explosion from '../sound/explosion.mp3';
import flag from '../sound/flag.mp3';
export default function Cell({details,updateFlag,revealcell}) {

    const [playExplosion]=useSound(explosion,{volume:1});
    const [playFlag]=useSound(flag,{volume:10});
    const style={
        cellStyle:{
            width:40,
            height:40,
            backgroundColor:details.revealed && details.value!==0?details.value==='X'?'red':'#b0aeae':details.revealed&&details.value===0?'#b0aeae':'#C6C6C6',
            border:'1px solid #808080',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            fontSize:'20px',
            cursor:'pointer',
            color:'red',
            fontWeight:'1000'
        },
    }
    
    const click=()=>{
        if(details.value==='X'){
            playExplosion();
        }
        revealcell(details.x,details.y);  
    }

    const rightclick=(e)=>{
        updateFlag(e,details.x,details.y)
        playFlag();
    }
    
    return (
        <div style={style.cellStyle} onClick={click} onContextMenu={rightclick}>
            {!details.revealed && details.flagged ? (
        "🚩"
      ) : details.revealed && details.value !== 0 ? (
        details.value === "X" ? (
          "💣"
        ) : (
          details.value
        )
      ) : (
        ""
      )}
        </div>
    )
}

