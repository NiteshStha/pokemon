const loadImage = (url, key) => {
  return new Promise((resolve) => {
    const image = new Image();
    const imgObj = {
      name: key,
    };
    image.addEventListener('load', () => {
      imgObj.image = image;
      resolve(imgObj);
    });
    image.src = url;
  });
};

async function loadAllImages() {
  let images = [];
  Object.keys(IMAGE_URLS).forEach((key) => {
    images.push(loadImage(IMAGE_URLS[key], key));
  });

  IMAGE_COLLECTION = await Promise.all(images);
}
