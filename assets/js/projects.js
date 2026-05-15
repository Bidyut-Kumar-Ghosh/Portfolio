const projectContainer = document.getElementById("projectContainer");

const username = "Bidyut-Kumar-Ghosh";

fetch(`https://api.github.com/users/${username}/repos?sort=updated`)
  .then((response) => response.json())
  .then((repos) => {

    // FILTER ONLY YOUR FINAL PROJECTS
    const selectedProjects = [
      "sweet_treats",
      "Gym-Management-System",
      "Ai-Chatbot",
      "S.S-FIBREGLASS",
      "Automatic-Survey"
    ];

    const filteredRepos = repos.filter(repo =>
      selectedProjects.includes(repo.name)
    );

    filteredRepos.forEach((repo) => {

      const updatedDate = new Date(repo.updated_at);

      const formattedDate = updatedDate.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
      });

      // ICONS
      let emoji = "🚀";

      if(repo.name === "sweet_treats") emoji = "🍭";
      if(repo.name === "Gym-Management-System") emoji = "🏋️";
      if(repo.name === "Ai-Chatbot") emoji = "🤖";
      if(repo.name === "S.S-FIBREGLASS") emoji = "🌀";
      if(repo.name === "Automatic-Survey") emoji = "📋";

      const projectCard = `

        <div class="project-card">

          <div class="project-top">

            <div class="project-icon">
              ${emoji}
            </div>

            <div>

              <h2>${repo.name}</h2>

              <p>
                ${repo.description || "No description available"}
              </p>

            </div>

          </div>

          <div class="project-bottom">

            <span>
              <span class="dot"></span>
              ${repo.language || "Unknown"}
            </span>

            <span>
              <i class='bx bx-calendar'></i>
              Updated on ${formattedDate}
            </span>

          </div>

          <div class="project-links">

            <a href="${repo.html_url}"
               target="_blank"
               class="btn">

               View Project

            </a>

          </div>

        </div>

      `;

      projectContainer.innerHTML += projectCard;

    });

  })
  .catch((error) => console.log(error));