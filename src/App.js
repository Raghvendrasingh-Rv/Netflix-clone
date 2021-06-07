import React from 'react'
import './App.css';
import Header from './Header'
import Banner from './Banner'
import Requests from './requests'
import Row from './Row';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Row 
        isLargeRow = {true}
        title="Netflix Original"
        // fetchUrl="/discover/tv?api_key=a5ab2f736cfb21fa3416c35bddc1fc0e&with_networks=213"
        fetchUrl={Requests.fetchNetflixOriginals}
      />
      <Row 
        title='Trending Now'
        fetchUrl={Requests.fetchTrending}
      />
      <Row 
        title='Top Rated'
        fetchUrl={Requests.fetchTopRated}
      />
      <Row 
        title='Action Movies'
        fetchUrl={Requests.fetchActionMovies}
      />
      <Row 
        title='Horror Movies'
        fetchUrl={Requests.fetchHorroMovies}
      />
      <Row 
        title='Comedy movies'
        fetchUrl={Requests.fetchComedyMovies}
      />
      <Row 
        title='Romantic Movies'
        fetchUrl={Requests.fetchRomanticMovies}
      />
      <Row 
        title='Documentries'
        fetchUrl={Requests.fetchDocumentaries}
      />
    </div>
  );
}

export default App;
