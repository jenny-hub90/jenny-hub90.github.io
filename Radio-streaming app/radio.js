const datas = 
  [
    {
      url: "http://streaming.softnep.net:8037/;stream.nsv&type=mp3",
      name: "Capital FM"
    },
    {
      url: "http://streaming.softnep.net:8115/;stream.nsv&type=mp3",
      name: "Radio Sarangi Morang"
    },
    {
      url: "http://streaming.softnep.net:8091/;stream.nsv&type=mp3",
      name: "Radio Annapurna Nepal"
    },
    {
      url: "http://stream.zenolive.com/2w81t82wx3duv",
      name: "Radio Audio "
    },
    {
      url: "http://streaming.softnep.net:8139/;stream.nsv&type=mp3",
      name: "Radio Makwanpur Gorkha"
    },
    {
      url: "http://streaming.softnep.net:8141/;stream.nsv&type=mp3",
      name: "Radio Myagdi Kali"
    },
    {
      url: "http://streaming.softnep.net:8003/;stream.nsv&type=mp3",
      name: "Butwal FM"
    },
    {
      url: "http://streaming.softnep.net:8065/;stream.nsv&type=mp3",
      name: "Unique FM Rukum"
    },
    {
      url: "http://streaming.softnep.net:8103/;stream.nsv&type=mp3",
      name: "Afno FM Okhaldhunga"
    },
    {
      url: "http://streaming.softnep.net:8051/;stream.nsv&type=mp3",
      name: "Radio Melamchi"
    },
    {
      url: "http://streaming.softnep.net:8091/;stream.nsv&type=mp3",
      name: "Citizen FM",
      image: "http://radio.nepal.fm/wp-content/uploads/Citizen-FM.jpg"
    },
  ]

  const container = document.querySelector('.flex');

  datas.forEach(data=>{
    container.innerHTML += `<div class="content">
      <p>${data.name}</p>
      <img src="music-1285165_1920.jpg" alt="music">
      <audio class="audio">
        <source src="${data.url}" type="audio/mpeg">
      </audio>
      <button class="playPauseBTN">Play &#9658;</button>
      &nbsp;
      &nbsp;
      <button class="stopBTN">Stop &#9611;</button>
    </div>`
  })
  
  container.addEventListener('click', (event) => {
    const audio = event.target.parentNode.querySelector('.audio');
    const playPauseBTN = event.target.parentNode.querySelector('.playPauseBTN');
    const stopBTN = event.target.parentNode.querySelector('.stopBTN');
    if(event.target === playPauseBTN){
      if(audio.paused){
        audio.play();
        playPauseBTN.innerHTML = "Pause &#9208;";
      }else{
        audio.pause();
        playPauseBTN.innerHTML = "Play &#9658;";
      }
    }else if(event.target === stopBTN){
      audio.pause();
      audio.currentTime = 0;
      playPauseBTN.innerHTML = "Play &#9658;";
    }
  });




