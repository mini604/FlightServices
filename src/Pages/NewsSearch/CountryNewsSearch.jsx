import { Divider, Typography } from '@mui/material';
import React, { useState } from 'react';

const CountryNewsSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [newsArticles, setNewsArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=71a35234355e45b8945e7c687dc5e6cb`);
      if (!response.ok) {
        throw new Error('Failed to fetch news articles');
      }
      const data = await response.json();
      setNewsArticles(data.articles);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <div style={{ textAlign: 'center', padding:'5%', paddingBottom:'15%' }}>
       <Typography variant='h3'
        color='black'
        fontWeight={650}
        textAlign='center'
        mt={5}
        fontFamily="Lato, sans-serif"
        >
          Country News Search
        </Typography>
        <Divider 
        sx={{
          mt:2,
          mx:55,
          borderBottomWidth: '3px',
          borderColor:'darkgray'
        }}/>
        <Typography variant='h6'
        color='black'
        fontWeight={500}
        textAlign='center'
        fontFamily="Lato, sans-serif"
       mt={1} mb={4}
        >
        Newspapers are tutors as well as informers
        </Typography>
      <label htmlFor="searchTerm" style={{fontFamily:"Lato, sans-serif", fontSize:'18px', marginRight:'20px', fontWeight:600}}>Enter a search term:</label>
      <input type="text" id="searchTerm" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} style={{width:'20%', marginRight:'20px'}} />
      <button onClick={handleSearch} disabled={!searchTerm || loading} style={{ padding: '4px 12px',
      backgroundColor: '#0C0404',
      color: '#fff',
      border: 'none',
      borderRadius: '4px', fontSize:'15px',
      cursor: 'pointer'}}>
        {loading ? 'Loading...' : 'Search'} 
      </button>
      {newsArticles.length > 0 && (
        <div>
          <h3>News Articles</h3>
          {newsArticles.map((article, index) => (
            <div key={index} style={{ maxWidth: '600px', margin: '0 auto' }}>
              <h4>{article.title}</h4>
              <img src={article.urlToImage} alt={article.title} style={{ maxWidth: '100%', height: 'auto' }} />
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CountryNewsSearch;
