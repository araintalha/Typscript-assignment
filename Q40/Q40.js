/*Album: Write a function called make_album() that builds a Object describing a music album.
The function should take in an artist name and an album title,
and it should return a Object containing these two pieces of information.
Use the function to make three dictionaries representing different albums.
Print each return value to show that Objects are storing the album information correctly.
Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
If the calling line includes a value for the number of tracks, add that value to the album’s Object.
Make at least one new function call that includes the number of tracks on an album.
*/
// Function to create an album object
function makeAlbum(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title,
    };
    // Add tracks to the album if provided
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Function to print album information
function printAlbum(album) {
    console.log("Artist: ".concat(album.artist));
    console.log("Title: ".concat(album.title));
    if (album.tracks !== undefined) {
        console.log("Tracks: ".concat(album.tracks));
    }
    console.log('\n');
}
// Example usage
var album1 = makeAlbum('Artist1', 'Album1');
var album2 = makeAlbum('Artist2', 'Album2', 12); // Example with tracks
var album3 = makeAlbum('Artist3', 'Album3', 8);
// Print album information
printAlbum(album1);
printAlbum(album2);
printAlbum(album3);
