import React, { useState } from 'react';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setSearchedType } from '../../redux/slices/searchSlice';
import { useRouter } from 'next/router';

interface SearchWithTagsButtonProps{
  tag:string,
}

export default function SearchWithTagsButton(params:SearchWithTagsButtonProps) {
  const { tag } = params;
  const router = useRouter()
  const dispatch = useDispatch();
  
  const [activeClass, setActiveClass] = useState('');
  function searchBlogByTag(){
    dispatch(setSearchedType({searchedType: 'tag',searchedWord:tag}))
    router.push('/search-result')
  }
  
  return (
    <Button
      className={`search-with-tags-btn ${activeClass}`}
      onClick={() => { setActiveClass(activeClass === 'active' ? '' : 'active');searchBlogByTag()}}
      variant="outlined"
      sx={{
        borderColor: '#C4C4C4', color: '#666666', textTransform: 'Capitalize', fontWeight: '400', fontSize: '.9rem', padding: '.1rem 1.2rem', margin: '0 .7rem .7rem 0',
      }}
    >
      {tag}
    </Button>
  );
}
