import React from 'react'
import "../stylesheet/InputOption.css"

export default function InputOption({Icon,title,color}) {
    return (
        <div className="inputoption">
            <Icon style={{color:color}}/>
            <p>{title}</p>
        </div>
    )
}
