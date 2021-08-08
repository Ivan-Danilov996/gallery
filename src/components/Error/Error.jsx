import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchImages } from '../../actions/actionCreators'

export default function Error({message, count}) {
    const dispatch = useDispatch()
    function reload() {
        dispatch(fetchImages(count))
    }
    return (
        <div>
            {message}
            <button onClick={reload}>Попробуйте еще раз!</button>
        </div>
    )
}
