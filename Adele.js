// DEFAULT CODE ////////////////////////
const BASE_URL = 'https://lyric-api-403c0.firebaseio.com/';
const songList = document.querySelector('#song-list');
const lyricsPanel = document.querySelector('#lyrics-panel');
const album = {
    artist: 'Adele',
    album: '25',
    tracks: [
        'Hello',
        'Send My Love (To Your New Lover)',
        'I Miss You',
        'When We Were Young',
        'Remedy',
        'Water Under the Bridge',
        'River Lea',
        'Love in the Dark',
        'Million Years Ago',
        'All I Ask',
        'Sweetest Devotion',
    ],
};

// WRITE YOUR CODE ////////////////////////

// 先顯示出songList
function albumtrackslist(data) {
    let html = '';
    data.tracks.forEach((item) => {
        html += `
  <li class="nav-item">
    <a class="nav-link nav-fill" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home">${item}</a>
  </li>
    `;
    });
    songList.innerHTML = html;
    // console.log(album.tracks)
}
albumtrackslist(album);

// 點擊songList呼叫歌詞
// const url = "https://api.lyrics.ovh/v1/adele/"
// 1. 取得點擊的文字
// 2. 將文字放進APIURL
// 3. 渲染對應資料
songList.addEventListener('click', (event) => {
    const listName = event.target.innerText;
    const url = `https://api.lyrics.ovh/v1/adele/${listName}`;
    axios
        .get(url)
        .then((response) => {
            // console.log(response.data.lyrics);
            let lyrics = response.data.lyrics;
            document.querySelector('#lyrics-panel').innerHTML = `
                <pre class="col-8" id="lyrics-panel">${lyrics}
                </pre>`;
        })
        .catch((error) => console.log(error));
});
