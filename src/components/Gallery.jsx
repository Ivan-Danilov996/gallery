import React from 'react'
import { useSelector } from 'react-redux'
import Error from './Error/Error'
import GalleryMain from './GalleryMain'
import GalleryPreviews from './GalleryPreviews'

export default function Gallery() {
    const {error, count} = useSelector(state => state.imageList)
    return (
        <div className="gallery">
            <GalleryMain/>
            <GalleryPreviews/>
            {error && <Error message={error} count={count} />}
        </div>
    )
}
