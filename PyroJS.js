// PyroJS Library
const PyroJS = (() => {

  function createGif(src, z = 9999) {
    const gif = document.createElement('img');
    gif.src = src;

    gif.style.position = 'fixed';
    gif.style.top = '0';
    gif.style.left = '0';
    gif.style.width = '100vw';
    gif.style.height = '100vh';
    gif.style.objectFit = 'cover';
    gif.style.zIndex = z;

    document.body.appendChild(gif);
  }

  return {
    // Original explode
    dynamite: (times = 1) => {
      for (let i = 0; i < times; i++) {
        createGif('https://raw.githubusercontent.com/prankapple/PyroJS/refs/heads/main/scr/dynamite.gif');
      }
    },

    // Big nuclear-style explosion
    nuclear: (times = 1) => {
      for (let i = 0; i < times; i++) {
        createGif('https://raw.githubusercontent.com/prankapple/PyroJS/refs/heads/main/scr/nuclear.gif', 10000);
      }
    },

    // Smaller fast explosions
    tnt: (times = 1) => {
      for (let i = 0; i < times; i++) {
        createGif('https://raw.githubusercontent.com/prankapple/PyroJS/refs/heads/main/scr/tnt.gif', 9000);
      }
    }
  };
})();
