import data from "../json/projects.json";

function populateProjects() {
  parentElement = document.getElementById("projectCards");
  let projectData = [...data];
  console.log(projectData);

  projectData.forEach((project) => {
    let markup = `
  <!-- card start -->
          <div
            class="card col-sm-12 col-md-6 col-lg-6"
            style="background-image: url(${project.bgImage})"
          >
            <div class="card-content">
              <img src="${project.bgImage}"/>
              <h3 class="card-title">${project.title}</h3>
              <p class="card-body">
                ${project.description}
              </p>

              <div class="card-content-usedtech">
                <i class="fa-brands fa-html5 card-content-usedtech--icon"></i>
                <i
                  class="fa-brands fa-css3-alt card-content-usedtech--icon"
                ></i>
                <i
                  class="fa-brands fa-square-js card-content-usedtech--icon"
                ></i>
                <i class="fa-brands fa-sass card-content-usedtech--icon"></i>
                <i
                  class="fa-brands fa-bootstrap card-content-usedtech--icon"
                ></i>
              </div>
              <div class="card-content-icons">
                <a href="">
                  <i class="fa-solid fa-circle-info"></i>
                </a>
                <a href="">
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          </div>
          <!--card end-->`;
    parentElement.insertAdjacentHTML("afterbegin", markup);
  });
}

populateProjects();
