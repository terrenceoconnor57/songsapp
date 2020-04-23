import React, { Component } from 'react';
import { connect } from 'react-redux';


const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Select Song</div>
  }



  return (

    <div>
    <h2>Information</h2>
    {song.title}
    <br/>
    {song.duration}

    </div>


);
};


const mapStateToProps = state => {
    return { song: state.selectedSong };

};


export default connect(mapStateToProps)(SongDetail);
