import React from 'react';
import { Box } from '@mui/material';
import Title from '../../atoms/Title';
import SearchWithTagsButton from '../../atoms/SearchWithTagsButton';

export default function SearchWithTags() {
  return (
    <Box>
      <Title marginBottom={{ sm: '3.4rem', xs: '1.6rem' }} mainTitle="Search" secondTitle="With Tags" />
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        <SearchWithTagsButton tag="Travel"/>
        <SearchWithTagsButton tag="Lifestyle"/>
        <SearchWithTagsButton tag="Fashion"/>
        <SearchWithTagsButton tag="Technology"/>
        <SearchWithTagsButton tag="Business"/>
        <SearchWithTagsButton tag="Desain"/>
        <SearchWithTagsButton tag="Health"/>
        <SearchWithTagsButton tag="Food"/>
        <SearchWithTagsButton tag="art"/>
      </Box>
    </Box>
  );
}
