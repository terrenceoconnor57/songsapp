import { combineReducers } from 'redux';


const songsReducer = () => {
  return [
    {title: 'Kings', duration: '2:35'},
    {title: 'Exit Wound', duration: '2:55'},
    {title: 'Someday', duration: '3:19'},
    {title: 'Killing Me', duration: '3:04'}
  ];
};


const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;

};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
