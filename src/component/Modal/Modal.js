import React from 'react';
import './Modal.css';

const Modal = ({ handleClose, show , src ,author,isMaskVisible,maskTransparency}) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const isMaskVisibleStyle = isMaskVisible ? {backgroundColor: `rgba(0,0,0,${maskTransparency})`} : {backgroundColor: `rgba(0,0,0,0)`};
  const modal=showHideClassName;
  return (
    <div className={modal} style={isMaskVisibleStyle} onClick={handleClose}>
      <section className="modal-main" onClick={e => e.stopPropagation()} >
      <span onClick={handleClose} className="close" >&times;</span>
        <div className="imgd">
        <img id="modal_img" className="img-modal" src={src} alt="Avatar" style={{width:340}}/>
        </div>
        <p>{author}</p>
      </section>
    </div>
    
  );
};
export default Modal;