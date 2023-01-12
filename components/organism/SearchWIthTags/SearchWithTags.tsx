import React from 'react';
import { Box } from '@mui/material';
import Title from '../../atoms/Title';
import SearchWithTagsButton from '../../atoms/SearchWithTagsButton';

export default function SearchWithTags(props:any) {
  const {setSearchedTag} = props;
  return (
    <Box>
      <Title marginBottom={{ sm: '3.4rem', xs: '1.6rem' }} mainTitle="Search" secondTitle="With Tags" />
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        <SearchWithTagsButton tag="Travel" setSearchedTag={setSearchedTag}/>
        <SearchWithTagsButton tag="Lifestyle" setSearchedTag={setSearchedTag}/>
        <SearchWithTagsButton tag="Fashion" setSearchedTag={setSearchedTag}/>
        <SearchWithTagsButton tag="Technology" setSearchedTag={setSearchedTag}/>
        <SearchWithTagsButton tag="Business" setSearchedTag={setSearchedTag}/>
        <SearchWithTagsButton tag="Desain" setSearchedTag={setSearchedTag}/>
        <SearchWithTagsButton tag="Health" setSearchedTag={setSearchedTag}/>
        <SearchWithTagsButton tag="Food" setSearchedTag={setSearchedTag}/>
        <SearchWithTagsButton tag="art" setSearchedTag={setSearchedTag}/>
      </Box>
    </Box>
  );
}
