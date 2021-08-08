import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getNextImage, getPrevImage, fetchNextImage } from '../actions/actionCreators';
import PreviewsBtn from './PreviewsBtn';
import PreviewsList from './PreviewsList';

export default function GalleryPreviews() {

    const { items, start, count, disable, end } = useSelector(state => state.imageList);
    const dispatch = useDispatch()

    function getPrevImg() {
        if (start === 0) {
            return null
        }
        dispatch(getPrevImage(start, count))
    }

    function getNextImg() {
        if (end === items.length) {
            dispatch(fetchNextImage(end))
        } else {
            dispatch(getNextImage(start, count))
        }
    }

    const disabled = start === 0 ? true : false

    return (
        <div className="gallery__previews">
            <PreviewsBtn>
                <div onClick={getPrevImg} className="previews__btn prev">
                    <button disabled={disabled} className="btn" type="button">&lt;</button>
                </div>
            </PreviewsBtn>
            <PreviewsList />
            <PreviewsBtn>
                <div onClick={getNextImg} className="previews__btn next">
                    <button disabled={disable} className="btn" type="button">&gt;</button>
                </div>
            </PreviewsBtn>
        </div>
    )
}
