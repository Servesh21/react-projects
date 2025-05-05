import React from 'react'
import {FaTimes} from 'react-icons/fa'
import { useGlobalCOntext } from './context'
const Modal = () => {
  const {isModalOpen,CloseModal} = useGlobalCOntext() 
  return (
    <div className={isModalOpen?"modal-overlay show-modal ":"modal-overlay"}>
        <div className="modal-container">
           <h3>Modal Content</h3> 
           <button className="close-modal-btn" onClick={CloseModal}><FaTimes/></button>
        </div>
    </div>
  )
}

export default Modal