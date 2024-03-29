import React, {useEffect, useState} from 'react';
import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import Navbar from '../components/organism/Navbar';
import Footer from '../components/organism/Footer';
import RecentlyPostedCard from '../components/molecules/RecentlyPostedCard';
import Script from 'next/script';

interface gnewsApiArticleProps {
  author:string
  content: string
  description: string
  publishedAt: string
  source: {id: string, name: string}
  title: string
  url: string
  image:string
}

export default function SearchResult() {
  const {searchedWord,searchedType}:any = useSelector((state:string) => state.search)
  const [cardData,setCardData]:any[] = useState('');
  const [isLoading,setIsloading] = useState(false)
  
  useEffect(() => {
      setIsloading(true);
      async function fetchData(){
        if(searchedType === "word"){
          await fetch(`https://gnews.io/api/v4/search?q=${searchedWord}&token=${process.env.NEXT_PUBLIC_GNEWSAPI_KEY}&lang=en`)
          .then(res => res.json())
          .then(res => setCardData(res))
          .catch(err => err)
        }else if(searchedType === "tag"){
          const currentDate = new Date().toISOString();
          await fetch(`https://gnews.io/api/v4/search?q=${searchedWord}&from=${currentDate.split('-')[0]+"-"+currentDate.split('-')[1]}-01&to=${currentDate}&sortBy=publishedAt&token=${process.env.NEXT_PUBLIC_GNEWSAPI_KEY}`)
          .then(res => res.json())
          .then(res => setCardData(res))
          .catch(err => err)
        }else if(searchedType === "category"){
          await fetch(`https://gnews.io/api/v4/top-headlines?topic=${searchedWord}&token=${process.env.NEXT_PUBLIC_GNEWSAPI_KEY}`)
          .then(res => res.json())
          .then(res => setCardData(res))
          .catch(err => err)
        }
      setIsloading(false);
    }
    fetchData();
  }, [searchedWord])

  return (
    <>
      <Script async src="https://kit.fontawesome.com/490a850dc0.js" crossOrigin="anonymous"></Script>
      <Navbar />
      <Box sx={{ margin: { sm: '4rem 3rem', xs: '3rem 1.5rem' } }}>
        <Box sx={{ marginBottom: { sm: '3rem', xs: '2rem' } }}>
          <Typography sx={{
            fontSize: '1rem', color: '#777777', borderBottom: '3px solid #00AAA1', display: 'inline-block', position: 'relative', zIndex: '10',
          }}
          >
            {searchedType === "word" ? "search " : ""}
            result for
            {' '}
            <Typography variant="caption" sx={{ fontWeight: '500', color: '#222222', fontSize: '1rem' }}>{searchedWord}</Typography>
            {searchedType === "tag" ? " tag" : searchedType === "category" ? " category " : ""}
          </Typography>
          <Box sx={{
            width: '100%', height: '1px', backgroundColor: '#C4C4C4', transform: 'translateY(-2px)',
          }}
          />
        </Box>
        {
          isLoading ? <Typography>Loading...</Typography> :
        <Box className="blogs" sx={{ width: { md: '70%', xs: '100%' } }}>
          {cardData?.articles?.map((blog:gnewsApiArticleProps, keyValue:number) => (
            <RecentlyPostedCard
              key={`posted${keyValue}`}
              label={blog.source.name.split(' ')[0]}
              title={blog.title}
              name={blog.source.name}
              date={new Date(blog.publishedAt).toLocaleDateString()}
              imgUrl={blog.image}
              url={blog.url}
              desc={blog.description}
              timeToRead={Math.round(blog.content.split(" ").length / 4)}
            />
          ))}
        </Box>
        }
      </Box>
      <Footer />
    </>
  );
}
