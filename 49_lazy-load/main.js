/*
! Lazy Load con axios
*/

//* DOM
const images = document.getElementById("images");

const getImages = () => {
  axios("https://picsum.photos/v2/list?page=2&limit=5").then((res) => {
    const fragment = document.createDocumentFragment();
    res.data.forEach((element) => {
      const newImage = document.createElement("IMG");
      newImage.src = element.download_url;
      fragment.append(newImage);
    });
    images.append(fragment);
    setObserver();
  });
};

// TODO: Nota para hacer un Lazy Load de elementos
// En esta función es donde se haría la mágia. Añadiendo o quitando clases a los elementos
const callback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      getImages();
      // Añadir animación para cargar elementos
    } else {
      // Quitar animación cuando salen los elementos
    }
  });
};

//* La idea de esta función es qué, cuando llegue la mitad de la imagen pida otras 5 imagenes más.
const setObserver = () => {
  const options = {
    threshold: 0.5,
  };

  const observer = new IntersectionObserver(callback, options);
  observer.observe(images.lastElementChild); // La última imagen sera el observer.
};

getImages();
