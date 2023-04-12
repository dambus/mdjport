const modBtn = document.querySelector(".mod-btn");

const loadModData = function (link, modTarget) {
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function (e) {
    if (xhr.readyState == 4 && xhr.status == 200) {
      modTarget.innerHTML = xhr.responseText;
      console.log(xhr.responseText);
    } else {
    }
  };
  xhr.open("GET", `${link}`, true);
  xhr.setRequestHeader("Content-type", "text/html");
  xhr.send();
};

modBtn.addEventListener("click", function () {
  let link = this.getAttribute("data-mod-content");
  let modalId = this.getAttribute("data-bs-target");
  let projectsModal = new bootstrap.Modal(
    document.getElementById(`${modalId}`),
    {
      keyboard: false,
    }
  );

  let modTarget = document
    .getElementById(`${modalId}`)
    .querySelector(".modal-body");

  modTarget.innerHTML = "";
  console.log(link);
  console.log(modTarget);
  // loadModData(link, modTarget);

  let xhr = new XMLHttpRequest();
  // xhr.open("GET", `${link}`, true);
  xhr.open("GET", `${link}`, true);
  console.log(xhr.readyState);
  console.log(xhr.status);
  console.log(xhr.responseText);
  xhr.onreadystatechange = function (e) {
    if (xhr.readyState == 4 && xhr.status == 200) {
      modTarget.innerHTML = xhr.responseText;

      xhr.setRequestHeader("Content-type", "text/html");
      xhr.send();
      console.log(xhr.responseText);
    } else {
      console.error();
    }
  };

  projectsModal.toggle();
});
