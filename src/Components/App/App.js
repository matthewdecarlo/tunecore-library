import React, { useState, useEffect } from 'react';

import { StyledApp, StyledTable, GlobalStyle } from './styles';

function App() {
  const [songs, setSongs] = useState();

  useEffect(() => {
    const fetchData = async () => {
      await fetch('http://localhost:3001/v1/songs')
        .then(response => response.json())
        .then(data => setSongs(data));
    };
    fetchData();
  }, []);

  const generateSongArtists = artists => {
    return artists.map(artist => artist.display_name).join(', ');
  };

  const formatTableHeader = title => {
    return title.split('_').join(' ');
  };

  const generateTableHeader = () => {
    if (!songs) return;

    const song = songs[0];
    const headers = Object.keys(song).map((key, index) => {
      return <th key={index}>{formatTableHeader(key)}</th>;
    });

    return (
      <thead>
        <tr>{headers}</tr>
      </thead>
    );
  };

  const generateTableRows = () => {
    if (!songs) return;

    const rows = songs.map(song => {
      const row = Object.values(song).map((value, index) => {
        const label = Array.isArray(value) ? generateSongArtists(value) : value;
        return (
          <td key={index}>
            <span>{label}</span>
          </td>
        );
      });

      return (
        <tr key={song.song_id} tabIndex={0}>
          {row}
        </tr>
      );
    });

    return <tbody>{rows}</tbody>;
  };

  return (
    <StyledApp>
      <GlobalStyle />
      <StyledTable>
        {generateTableHeader()}
        {generateTableRows()}
      </StyledTable>
    </StyledApp>
  );
}

export default App;
