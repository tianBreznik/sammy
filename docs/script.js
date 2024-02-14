import { GiphyFetch } from '@giphy/js-fetch-api'

const gf = new GiphyFetch('bvWogBDRALOdICcvDhJPS5XVxe50qs7O');
const keys = ["lvl1", "lvl2","lvl3","lvl4","lvl5","lvl6"];
//const promises = keys.map((key) => gf.search(sessionStorage.getItem(key), { sort: 'relevant', lang: 'en', limit: 10}));
var gifscum = [];

// fetch 10 gifs
(async () => {
    // first
    const { data: gifs1 } = await gf.search(sessionStorage.getItem(keys[0]), { sort: 'relevant', lang: 'en', limit: 10, type: 'stickers' });
    gifscum.push(gifs1)
        
    // second 
    const { data: gifs2 } = await gf.search(sessionStorage.getItem(keys[1]), { sort: 'relevant', lang: 'en', limit: 10, type: 'stickers' });
    gifscum.push(gifs2)

    const { data: gifs3 } = await gf.search(sessionStorage.getItem(keys[2]), { sort: 'relevant', lang: 'en', limit: 10, type: 'stickers' });
    gifscum.push(gifs3);

    const { data: gifs4 } = await gf.search(sessionStorage.getItem(keys[3]), { sort: 'relevant', lang: 'en', limit: 10, type: 'stickers' });
    gifscum.push(gifs4)

    // ... so on ...
    const { data: gifs5 } = await gf.search(sessionStorage.getItem(keys[4]), { sort: 'relevant', lang: 'en', limit: 10, type: 'stickers' });
    gifscum.push(gifs5)

    const { data: gifs6 } = await gf.search(sessionStorage.getItem(keys[5]), { sort: 'relevant', lang: 'en', limit: 10, type: 'stickers' });
    gifscum.push(gifs6)

    gifscum = gifscum.flat(1);

    gifscum.forEach(function(gif) { 
        console.log("doing it");
        var img = document.createElement("iframe");
        img.src = gif.embed_url;
        var src = document.getElementById("resultsdiv");
        img.style.position = "absolute";
        img.allowTransparency="true";

        img.frameBorder = 0;

        img.style.top = window.innerHeight * 0.225 + Math.random() * window.innerHeight * 0.45 + "px";
        img.style.left = window.innerWidth * 0.215 + Math.random() * window.innerWidth * 0.40 + "px";
        src.appendChild(img);
        }
    );

  })();



