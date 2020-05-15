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

document.addEventListener("DOMContentLoaded", loadUsers);

const url = "https://jsonplaceholder.typicode.com/users";

async function loadUsers() {
  const userList = document.getElementById("userList");
  const users = await (await fetch(url)).json();

  console.log(users);

  let userItems = "";

  users.forEach((user) => {
    let listItem = document.createElement("li");

    listItem.innerHTML = user.name;

    userList.appendChild(listItem);
  });
}
