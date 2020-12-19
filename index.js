const SpotifyWebHelper = require('spotify-web-helper');
const helper = SpotifyWebHelper();

const Discord = require('discord.js');
const client = new Discord.Client();
//my user token
const token = '123xyz';
//my bot token
//const token = '123xyz';

client.on('ready', () => {
  console.log('Logged in as ' + client.user.username);
});

var nowPlaying = [];
var toDisplay = '';

helper.player.on('error', err => {
  if (error.message.match(/No user logged in/)) {
    // also fires when Spotify client quits
  } else {
    // other errors: /Cannot start Spotify/ and /Spotify is not installed/
  }
});

helper.player.on('status-will-change', () => {

  //console.log(helper.status);
  if (helper.status.track.track_type == 'ad') {
    client.user.setGame('an advertisement');
    console.log('an advertisement');
  } else if (helper.status.track.track_type == 'normal') {
    nowPlaying = {song: helper.status.track.track_resource.name,
                  artist: helper.status.track.artist_resource.name};
    toDisplay = nowPlaying.artist + ' - ' + nowPlaying.song;
    console.log(toDisplay);
    client.user.setGame(toDisplay);
  } else {
    console.log('Error; perhaps a new playlist was selected?');
  }

});

client.login(token);
