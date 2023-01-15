export default class PlatziClass {
  constructor({ name, videoID }) {
    this._name = name;
    this._videoID = videoID;
  }

  reproducir() {
    videoPlay(this._videoID);
  }

  pausar() {
    videoStop(this._videoID);
  }
}

function videoPlay(id) {
  const urlSecreata = 'https://platzisecreto.com/' + id;
  console.log('Se está reproduciendo desde la url ' + urlSecreata);
}

function videoStop(id) {
  const urlSecreta = 'https://platzisecreto.com/' + id;
  console.log('Pausamos la url ' + urlSecreta);
}
