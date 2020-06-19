/*
! Online/Offline
*/

const msg = document.getElementById("alert");

addEventListener("online", (e) => {
  setAlert(1);
});

addEventListener("offline", (e) => {
  setAlert(0);
});

const setAlert = (status) => {
  msg.classList.remove("alert--online");
  msg.classList.remove("alert--offline");

  status === 0
    ? setTimeout(() => {
        msg.textContent = "Ups! It seems you're Offline";
        msg.classList.add("alert--offline");
      }, 100)
    : setTimeout(() => {
        msg.textContent = "Great!! You're Online again!";
        msg.classList.add("alert--online");
      }, 100);
};
