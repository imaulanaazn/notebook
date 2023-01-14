import React, { useState } from 'react';
import { Stack, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { setSearchedType } from '../../redux/slices/searchSlice';

interface CategoriesCardProps{
  title:string,
  iconClass:string,
  topic:string
}

export default function CategoriesCard({ title, iconClass,topic }:CategoriesCardProps) {
  const [activeClass, setActiveClass] = useState('');
  const router = useRouter()
  const dispatch = useDispatch();
  
  function searchBlogByCategory(){
    dispatch(setSearchedType({searchedType: 'category',searchedWord:topic}))
    router.push('/search-result')
  }
  return (
    <Stack
      className={`categories-card ${activeClass}`}
      onClick={() => { setActiveClass(activeClass === 'active' ? '' : 'active'); searchBlogByCategory()}}
      sx={{
        minWidth: '15rem', height: '10rem', backgroundColor: '#E8F3F3', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', borderRadius: '6px',
      }}
    >
      <i className={`${iconClass} categories-icon`} />
      <Typography variant="h2" sx={{ fontSize: '1rem', fontWeight: '400' }}>{title}</Typography>
    </Stack>
  );
}
