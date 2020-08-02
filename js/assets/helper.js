const loadImage = (url, key) => {
  return new Promise((resolve) => {
    const image = new Image();
    const imgObj = {
      name: key,
    };
    image.addEventListener('load', () => {
      imgObj.sprite = image;
      resolve(imgObj);
    });
    image.src = url;
  });
};

async function loadAllSprites() {
  let sprites = [];
  Object.keys(SPRITE_URLS).forEach((key) => {
    sprites.push(loadImage(SPRITE_URLS[key], key));
  });

  SPRITES_COLLECTION = await Promise.all(sprites);
}
