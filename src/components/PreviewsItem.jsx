import React from 'react'
import { useDispatch } from 'react-redux'
import { setCurrentImage } from '../actions/actionCreators'

export default function PreviewsItem({urls, id, currentId}) {
    const dispatch = useDispatch()

    function setCurrent(e) {
        e.preventDefault()
        dispatch(setCurrentImage(urls, id))
    }

    return (
        <a href="#" onClick={setCurrent} className={id === currentId? "previews__item current": "previews__item"}>
            <img className="previews__image" src={urls.thumb} alt="" />
        </a>
    )
}
