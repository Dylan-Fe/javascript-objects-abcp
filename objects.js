var playlist = {
  artistName: 'songTitle'
};

function updatePlaylist(playlist, name, song) {
<<<<<<< HEAD
  //playlist = Object.assign({}, playlist, {[name]: song});
  playlist[name] = song;
=======
  playlist = Object.assign({}, playlist, {[name]: song});
>>>>>>> c5f4df4f0ef8fb7c9097df6a7779f1fea3cdd247
  return playlist;
}

function removeFromPlaylist(playlist, name) {
  delete playlist[name];
  return playlist;
}