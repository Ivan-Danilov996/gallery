import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImages } from '../actions/actionCreators';
import PreviewsItem from './PreviewsItem';

export default function PreviewsList() {
    const {items, start, currentImage, end, count} = useSelector(state => state.imageList);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchImages(count))
    }, [dispatch])
    return (
        <div className="previews__list">
            {items.length !== 0 ? items.slice(start, end).map((el) => <PreviewsItem key={el.id} {...el} currentId={currentImage.id} />) : null}
        </div>
    )
}
