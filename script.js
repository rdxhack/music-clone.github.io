console.log("Welcome to G-Music");
let audioelement=new Audio("1.mp3");
let songIndex=0;
let masterplay=document.getElementById('masterplay');
let myprogressbar=document.getElementById('myprogressBar');
let gif=document.getElementById('gif');
let songitems =Array.from(document.getElementsByClassName('songitem'));
let songitemplay=document.getElementsByClassName('songitemplay');

let songs = [
{SongName:"Maan Meri Jaan_64(PagalWorld.com.se)",filepath:"1.mp3" ,coverpath:"bac.jpg"},
{SongName:"Kesariya_64(PagalWorld.com.se)",filepath:"2.mp3" ,coverpath:"bac.jpg"}, 
{SongName:"Mera Dil Ye Pukare Aaja ",filepath:"3.mp3" ,coverpath:"bac.jpg"},
{SongName:"Kesariya_64(PagalWorld.com.se)",filepath:"4.mp3" ,coverpath:"bac.jpg"}, 
{SongName:"Maan Meri Jaan_64(PagalWorld.com.se)",filepath:"11.mp3" ,coverpath:"bac.jpg"},
{SongName:"Mera Dil Ye Pukare Aaja ",filepath:"5.mp3" ,coverpath:"bac.jpg"},
{SongName:"Maan Meri Jaan_64(PagalWorld.com.se)",filepath:"6.mp3" ,coverpath:"bac.jpg"},
{SongName:"Kesariya_64(PagalWorld.com.se)",filepath:"7.mp3" ,coverpath:"bac.jpg"},
{SongName:"Mera Dil Ye Pukare Aaja",filepath:"8.mp3" ,coverpath:"bac.jpg"},
{SongName:"Kesariya_64(PagalWorld.com.se)",filepath:"9.mp3" ,coverpath:"bac.jpg"},
{SongName:"Maan Meri Jaan_64(PagalWorld.com.se)",filepath:"10.mp3" ,coverpath:"back.webp"},
{SongName:"Maan Meri Jaan_64(PagalWorld.com.se)",filepath:"12.mp3" ,coverpath:"back.webp"},

]

songitems.forEach((element,i) => {
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].SongName;
});


masterplay.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity=1; 
    }
    else{
        audioelement.pause();
        masterplay.classList.add('fa-circle-play');
        masterplay.classList.remove('fa-circle-pause');
        gif.style.opacity=0;
    }
})

audioelement.addEventListener('timeupdate',()=>{
   
    progress= parseInt((audioelement.currentTime/audioelement.duration)*100);
    // console.log(progress);
    myprogressbar.value=progress;
})
myprogressbar.addEventListener('change',()=>{
    audioelement.currentTime=myprogressbar.value*audioelement.duration/100;
})


const makeallPlay=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) =>{
        element.classList.add('fa-circle-play');
        element.classList.remove('fa-circle-pause');
    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        // console.log(e.target);
        makeallPlay();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-puase');
        audioelement.src=`${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].SongName;
        audioelement.play();
        gif.style.opacity=1;
        audioelement.currentTime=0;
        masterplay.classList.add('fa-circle-pause');
        masterplay.classList.remove('fa-circle-play');
    })

})


// Next button
document.getElementById('next').addEventListener('click' ,()=>{
    if(songIndex>9){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    masterSongName.innerText=songs[songIndex].SongName;
    audioelement.src=`${songIndex+1}.mp3`;
    audioelement.play();
    audioelement.currentTime=0;
    masterplay.classList.add('fa-circle-pause');
    masterplay.classList.remove('fa-circle-play');
})

// previou buttomn

document.getElementById('previous').addEventListener('click' ,()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    masterSongName.innerText=songs[songIndex].SongName;
    audioelement.src=`${songIndex+1}.mp3`;
    audioelement.play();
    audioelement.currentTime=0;
    masterplay.classList.add('fa-circle-pause');
    masterplay.classList.remove('fa-circle-play');
})


songitemplay.addEventListener('click',()=>{
    if(audioelement.pause || audioelement.currentTime<=0){
        audioelement.play();
        songitemplay.classList.remove('fa-circle-play');
        songitemplay.classList.add('fa-circle-pause');
        gif.style.opacity=1; 
    }
    else{
        audioelement.pause();
        songitemplay.classList.add('fa-circle-play');
        songitemplay.classList.remove('fa-circle-pause');
        gif.style.opacity=0;
    }
})