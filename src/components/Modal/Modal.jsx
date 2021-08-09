import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveModal } from '../../actions/actionCreators'
import "./modal.css"


export default function Modal() {
    const {active, url} = useSelector(state => state.modal)
    const dispatch = useDispatch()
    const style = {
        backgroundImage: `url(${url})`
    }
    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => dispatch(setActiveModal(false))}>
            <div className={active ? 'modal__content active' : 'modal__content'}>
                <img className="modal__image" src={url} alt=""/>
                <div style={style} className="blur-block"></div>
            </div>
        </div>
    )
}
