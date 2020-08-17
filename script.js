let inputHere = document.getElementById("inputHere");
const searchHere = document.getElementById("searchHere");

//---------- === Lyrics search api results === -->

searchHere.addEventListener('click', function() {
    document.getElementById("singleResultId").style.display = "block";
    document.getElementById("singleLyricsShowTwo").style.display = "none";
    fetch('https://api.lyrics.ovh/suggest/'+inputHere.value)
    .then(res => res.json())
    .then(data=> displayAll(data.data))
    .catch(err => alert('lyrics not found', err))
})

function displayAll(users) {
    const singleResultId = document.getElementById('singleResultId');
    singleResultId.innerHTML = '';
    for (let i = 0; i < 10; i++) {
        const element = users[i];
        const title = element['title'];
        const artist = element['artist']['name'];
        singleResultId.innerHTML += `<div id="" class="single-result row align-items-center my-3 p-3">
                        <div class="col-md-9">
                       <h3 id="songTitle" class="lyrics-name">${title}</h3>
                        <p class="author lead">Album by <span>${artist}</span></p>
                        </div>
                        <div class="col-md-3 text-md-right text-center">
                        <button onclick="displayLyrics('${artist}', '${title}')" class="btn btn-success">Get Lyrics</button>
                         </div>
                    </div>`;
        }
    }
//---------- === Lyrics search api results === -->

//---------- === Lyrics api results === -->

    function displayLyrics(artist, title) {
        fetch('https://api.lyrics.ovh/v1/' + artist + '/' + title)
        .then(res => res.json())
        .then(data => displayOneLyrics(data.lyrics))
        .catch(err => alert('lyrics not found', err))
    };

    function displayOneLyrics(lyricsData) {
                   const singleLyricsShowTwo = document.getElementById('singleLyricsShowTwo');
                   singleLyricsShowTwo.innerHTML = '';
                    singleLyricsShowTwo.innerHTML += `<button class="btn go-back">&lsaquo;</button>
               <h2 class="text-success mb-4"></h2>
                <pre class="lyric text-white"> ${lyricsData} </pre>`;
                document.getElementById("singleResultId").style.display = "none";
                document.getElementById("singleLyricsShowTwo").style.display = "block";
               }
    //---------- === Lyrics results === -->
                