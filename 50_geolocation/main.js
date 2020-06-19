/*
! Geolocation

https://developer.mozilla.org/es/docs/WebAPI/Using_geolocation

https://developer.mozilla.org/es/docs/Web/API/NavigatorGeolocation/geolocation

* Métodos:
- geolocation.getCurrentPosition() -> Utilizado para obtener la posición actual.
? Recibe 3 parámetros. Uno obligatorio y dos opcionales
    1º Función que va a optener la posición (suele llamarse getPosition)
    2º Error en el caso de que lo hubiera.
    3º Opciones que podemos poner.

- geolocation.watchPosition() -> Utilizado para asignar un manejador para dar seguimiento a cualquier cambio de ubicación.
? Funciona exactamente igual que getCurrentPosition() pero refiriendose a móviles.

- geolocation.clearWatch() -> Utilizado para eliminar un manejador asignado a los cambios de ubicación.

*/

const button = document.getElementById("button");

button.addEventListener("click", () => {
  const geolocation = navigator.geolocation;
  geolocation.getCurrentPosition(getPosition, error, options);
});

const options = {
  // Si el dispositivo lo permite y tiene más opciones de geolocalización (gps en móviles, etc) las usará si es true.
  enableHightAccuracy: true,

  // Determina el tiempo para que nos devuelva la posición
  timeout: 5000, // 5s

  // La duración que permitimos que algo este en cache
  maximumAge: 0, // Asi no devuelve cache y devuelve info real
};

const getPosition = (position) => {
  console.log(position);

  const userPosition = {
    lat: position.coords.latitude,
    lng: position.coords.longitude,
  };

  console.log(userPosition.lat);
  console.log(userPosition.lng);
};

const error = (error) => console.error(error);
