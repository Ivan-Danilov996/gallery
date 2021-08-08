import React from 'react'
import './loader.css'

export default function Loader({loading}) {
    return (
        <div className={loading? "lds-spinner active" : "lds-spinner"}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    )
}
