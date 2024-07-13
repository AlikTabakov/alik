// Made by Lummit - https://obnoxious.club/ | https://github.com/Lumm1t/ | Discord: Lummit#0201
// Credits to expl0it, shellcode.team
// GitHub: https://github.com/Lumm1t/obnoxious.club

class _app {
  id = 0;
  videoElement = null;
  audioElement = null;
  musicVolume = 0.12;
  musicFadeIn = 4000;
  skippedIntro = false;
  backgroundToggler = false;
  shouldIgnoreVideo = false;
  effects = ['bounce', 'flash', 'pulse', 'rubberBand', 'shake', 'swing', 'tada', 'wobble', 'jello'];
  brandDescription = ['a/', 'al#', 'ali@', 'alik%','alik._','alik.T!','alik.Ta*','alik.Tab$','alik.Taba+','alik.Tabak{','alik.Tabako%','alik.Tabakov:','alik.Tabakov: лучший из лучших','alik.Tabakov: больше чем человек','alik.Tabakov: бeзупречный!','alik.Tabakov: всегда на высоте!','alik.Tabakov: пример для подражания','alik.Tabakov: в центре внимания','alik.Tabakov: ','alik.Tabakov: новая эра человечества!','alik.Tabakov: котик','alik.Tabakov: котик + alik.Tabakov = :3','alik.Tabakov: всегда превосходен','alik.Tabakov: Telegramm - @Alik_Tabakov', 'alik.Tabakov: лучший','alik.Tabakov: мр-р-р','alik.Tabakov: 100 друзей, но что для них?..','alik.Tabakov: на hopper002 ты ни не кто!','alik.Tabakov: как делишки?','alik.Tabakov: только самое-самое!','alik.Tabakov: ладно, пока!',' '];

  titleChanger = (text, delay) => {
    if (!text) return;

    delay = delay || 500;

    let counter = 0;

    setInterval(() => {
      if (counter < text.length) document.title = text[counter++];
      else document.title = text[(counter = 0)];
    }, delay);
  };

  iconChanger = (urls, delay) => {
    if (!urls) return;

    delay = delay || 2000;

    let counter = 0;

    setInterval(() => {
      if (counter < urls.length) {
        const link = document.querySelector("link[rel*='icon']") || document.createElement('link');

        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        link.href = urls[counter];

        document.getElementsByTagName('head')[0].appendChild(link);
      } else counter = 0;

      ++counter;
    }, delay);
  };
}

const app = new _app();
