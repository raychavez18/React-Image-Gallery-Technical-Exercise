import React from 'react';

const List = (props) => {
  const { album } = props;
  if (!album || album.length === 0) return <p>No album, sorry</p>;
  return (
    <ul>
      <h2 className='list-head'>Album Info</h2>
      {album.map((repo) => {
        return (
          <li key={repo.id} className='list'>
            <p className="align-center"><strong>Name:</strong> <span className='repo-text'>{repo.author}</span></p>
            <img className="album-cover" src={repo.download_url} alt="artwork" />
          </li>
        );
      })}
    </ul>
  );
};
export default List;
