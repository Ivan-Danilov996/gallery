import React from 'react'

export default function GalleryBtn({getCurrentImage, disabled}) {
    return (
        <button disabled={disabled} type="button" onClick={getCurrentImage} className="gallery__main-btn btn"></button>
    )
}
