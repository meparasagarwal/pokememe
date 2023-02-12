import React,{useState,useEffect, useCallback} from 'react'
import useLazyLoad from '../../hooks/useLazyLoad';
import ImagesRender from './ImagesRender';
import axios from 'axios';
import useInfinityScroll from '../../hooks/useInfintiyScroll';
import './Images.css'

function Images() {
  const [curPage,setCurPage] = useState(1);
  const [images,setImages] = useState([]);
  const fetchItems=()=>{
    axios.get(`https://picsum.photos/v2/list?page=${curPage}&limit=12`)
    .then(res =>{
        const data=res.data;
        console.log(data);
        for(let i in data){
            const image = data[i].download_url
            const author = data[i].author
            setImages(prevState=> [...prevState,{image,author}]);
        }
        setCurPage(prevState => prevState+1);
    })
    .catch(err =>{
        console.log(err);
    })
    setIsFetching(false);
  }
  const [isFetching,setIsFetching]=useInfinityScroll(fetchItems);
  useLazyLoad();
  useEffect(()=>{
    fetchItems();
  },[])
  return (
        <ImagesRender images={images} isFetching={isFetching}/>
  )
}

export default Images

