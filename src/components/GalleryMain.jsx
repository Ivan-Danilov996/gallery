import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getNextCurrentImage, getPrevCurrentImage, fetchNextCurrentImage } from '../actions/actionCreators'
import GalleryBtn from './GalleryBtn'
import GalleryItem from './GalleryItem'
import Loader from './Loader/Loader'

export default function GalleryMain() {
    const { currentImage, items, end, disable, loading } = useSelector(state => state.imageList)
    const dispatch = useDispatch()

    function getNextCurrentImg() {
        if (!Object.keys(currentImage).length) {
            return null
        } else if (currentImage.id === items[items.length - 1].id) {
            dispatch(fetchNextCurrentImage(end))
        } else {
            dispatch(getNextCurrentImage(currentImage))
        }
    }
    function getPrevCurrentImg() {
        if (!Object.keys(currentImage).length || currentImage.id === items[0].id) {
            return null
        }
        dispatch(getPrevCurrentImage(currentImage))
    }
    const disabledNextBtn = !Object.keys(currentImage).length || disable? true : false
    const disabledPrevBtn = !Object.keys(currentImage).length || currentImage.id === items[0].id? true : false
    return (
        <div className="gallery__main">
            <GalleryBtn getCurrentImage={getPrevCurrentImg} disabled={disabledPrevBtn}/>
            {Object.keys(currentImage).length ? <GalleryItem {...currentImage} /> : <div className="gallery__main-item current-img"></div>}
            <GalleryBtn getCurrentImage={getNextCurrentImg} disabled={disabledNextBtn}/>
            {loading? <Loader/> : null}
        </div>
    )
}
