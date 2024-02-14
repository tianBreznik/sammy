import { GiphyFetch } from '@giphy/js-fetch-api'

const gf = new GiphyFetch('bvWogBDRALOdICcvDhJPS5XVxe50qs7O');
var letter = ["SAMMY ","will ", "you ", "be ", "my ", "valentine ", "?"];

//const promises = keys.map((key) => gf.search(sessionStorage.getItem(key), { sort: 'relevant', lang: 'en', limit: 10}));
var gifscum = [];
const lower = 0x2665;
const upper = 0x1F525;

// fetch 10 gifs
(async () => {

    const { data: gifs1 } = await gf.search("romance", { sort: 'relevant', lang: 'en', limit: 60, type: 'stickers' });
    gifscum.push(gifs1)

    gifscum = gifscum.flat(1);

  })();

  var clickcount = 0;
  var imagetrail = 0;
  function printMousePos(event) {

    console.log(document.getElementById("giffcontainer")); 
    var paragraph = document.createElement("p");
    // img.src = gif.embed_url;
    if(letter.length){
        paragraph.innerHTML = letter.shift();
        var src = document.getElementById("giffcontainer");
        paragraph.style.position = "absolute";
        if(!clickcount){
            paragraph.style.fontFamily = "sickfont";
            paragraph.style.fontSize = "40px";
            paragraph.style.top = event.clientY + "px";
            paragraph.style.left = event.clientX + "px";
        }
        else if(clickcount === 6){
            paragraph.style.fontSize = "440px";
            paragraph.style.display = "table-cell;";
            paragraph.style.color = "red";
            paragraph.style.top = -window.innerHeight*0.25 + "px";
            paragraph.style.left = window.innerWidth*0.4 + "px";
        }
        else {
            paragraph.style.top = event.clientY + "px";
            paragraph.style.left = event.clientX + "px";
        }

        src.appendChild(paragraph);

        for(let i = 0; i < getRandomInt(1, 4); i++){
            var img = document.createElement("img");
            imagetrail++;
            img.src = "images/" + imagetrail + ".jpg";
            var src = document.getElementById("giffcontainer");
            img.style.position = "absolute";

            img.style.top = window.innerHeight * 0.05 + Math.random() * window.innerHeight * 0.6 + "px";
            img.style.left = window.innerWidth * 0.05 + Math.random() * window.innerWidth * 0.65 + "px";
            img.style.opacity = "50%";
            src.appendChild(img);

        }
        clickcount++;
    }
    else{
        clickcount++;
        console.log("empty");
    }

  }
  
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getRandomFloat(min, max, decimals) {
  const str = (Math.random() * (max - min) + min).toFixed(
    decimals,
  );

  return parseFloat(str);
}

  function loop() {
    var src = document.getElementById("giffcontainer");
    console.log(clickcount);
    if(clickcount === 7){
        if(gifscum.length){
            console.log("doing it");
            var giffi = document.createElement("iframe");
            var gif = gifscum.pop();
            giffi.src = gif.embed_url;
            giffi.style.position = "absolute";
            giffi.allowTransparency="true";
    
            giffi.frameBorder = 0;
    
            giffi.style.top = Math.random() * window.innerHeight * 0.85 + "px";
            giffi.style.left = Math.random() * window.innerWidth * 0.9 + "px";
            giffi.style.zindex = 15;
            src.appendChild(giffi);
        }
    }
  
    requestAnimationFrame(() => {
        setTimeout(loop, 500);
    });
  }

  var yessh = ["yeshhhh ","yessa ", "yea<3 ", "yuss", "YE", "yeaaaaaaaa", "mhm", "YES", "YESSSSSS", "ofc bae", "in every universe<3", "always","yes yes yes", "YEA", "MMMMHMHMHMHMHMHMHMHMM", "YES", "OUI", "ouiiiiii"];
  function loopyes() {
    var src = document.getElementById("giffcontainer");
    if(clickcount > 7){
        var yes = document.createElement("h2");
        var rand = Math.floor(Math.random() * yessh.length);
        var yesval = yessh[rand];
        yes.innerHTML = yesval;
        yes.style.color = "red";
        yes.style.fontSize = Math.random()*250 + "px";
        yes.style.backgroundcolor = "black";
        yes.style.textshadow = "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000";
        yes.style.position = "absolute";

        yes.style.top = Math.random() * window.innerHeight * 0.95 + "px";
        yes.style.left = Math.random() * window.innerWidth * 0.98 + "px";
        src.appendChild(yes);
    }
  
    requestAnimationFrame(() => {
        setTimeout(loopyes, 50);
    });
  }
  
  loop();
  loopyes();
  document.addEventListener("click", printMousePos);


