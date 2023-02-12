import React,{useState} from 'react'
import Modal from '../Modal/Modal';
import './Images.css'


function ImagesRender(props) {
  const {images}=props;
  const [show,setShow] = useState(false);
  const [src,setSrc] = useState('');
  const [author,setAuthor] = useState('');
  
  const showModal = (index,author)=>{
    const img = document.getElementById(index);
    setSrc(img.src);
    setAuthor(author);
    setShow(true);
  }
  const hideModal = () =>{
    setShow(false);
  }
  
  return (
    <React.Fragment>
    
    <div className='gallery'>
    {
        images.map((meme,index) => {
            return (
            <div key={index}>
            <div className="card" key={index}>
             
             <img src='' id={index} data-src={meme.image} alt="pic" style={ {width:240}}  />
             
             
             <div className="container">
               <h4><b>Author By: {meme.author}</b></h4>
               <button type="button" onClick={()=> showModal(index,meme.author)}>See Big Image</button>
             </div>
            </div>
            <Modal show={show} handleClose={hideModal} src={src} author={author} isMaskVisible={true} maskTransparency={0.1}/>
            </div>
          )
        })
    }
    </div>
    </React.Fragment>
  )
}

export default ImagesRender