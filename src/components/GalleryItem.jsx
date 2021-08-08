import React from 'react'
import { useDispatch } from 'react-redux'
import { setActiveModal } from '../actions/actionCreators'

export default function GalleryItem({ urls }) {

    const dispatch = useDispatch()

    return (
        <div className="gallery__main-item current-img" onClick={() => {
            dispatch(setActiveModal(true, urls.regular))
        }}>
            <img className="gallery__current-img" src={urls.small} alt="" />
        </div>
    )
}
