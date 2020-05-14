if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("./serviceworker.js").then(
      function (registration) {
        // Registration was successful
        console.log("Hurray! Service workers with scope: ", registration.scope);
      },
      function (err) {
        // registration failed :(
        console.log("Oops! ServiceWorker registration failed: ", err);
      }
    );
  });
}
