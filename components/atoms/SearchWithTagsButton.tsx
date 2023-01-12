import React, { useState } from 'react';
import { Button } from '@mui/material';

interface SearchWithTagsButtonProps{
  tag:string,
  setSearchedTag:any
}

export default function SearchWithTagsButton(params:SearchWithTagsButtonProps) {
  const { tag,setSearchedTag } = params;
  const [activeClass, setActiveClass] = useState('');
  return (
    <Button
      className={`search-with-tags-btn ${activeClass}`}
      onClick={() => { setActiveClass(activeClass === 'active' ? '' : 'active'); setSearchedTag(tag) }}
      variant="outlined"
      sx={{
        borderColor: '#C4C4C4', color: '#666666', textTransform: 'Capitalize', fontWeight: '400', fontSize: '.9rem', padding: '.1rem 1.2rem', margin: '0 .7rem .7rem 0',
      }}
    >
      {tag}
    </Button>
  );
}
