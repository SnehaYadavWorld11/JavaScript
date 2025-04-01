let id = document.getElementById("username");
let btn = document.getElementById("btn");
let viewbtn = document.getElementById("viewbtn");

async function fetchGitHubUser(username) {
  const token =
    "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"; // Replace with your actual token

  try {
    let response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `token ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    let userData = await response.json();
    console.log(userData);
    displayUserDetails(userData);
  } catch (error) {
    document.getElementById("profile").innerHTML =
      "<h1>Oops! User Not FOUND</h1>";
    console.error("Error:", error.message);
  }
}

btn.addEventListener("click", () => {
  let userid = id.value;
  fetchGitHubUser(userid);
});

function displayUserDetails(userData) {
  const {
    avatar_url,
    name,
    bio,
    followers,
    following,
    public_repos,
    html_url,
  } = userData;
  document.getElementById("profile").innerHTML = `
              <div id="profile">
        <div id="divv">
        <div id="about">
          <img id="image" src=${avatar_url} />
          <div id="aboutdetails">
            <p>${name}</p>
            <p>${bio}</p>
          </div>
        </div>
        <div id="detail">
          <div id="details">
            <div id="info">
              <p>Followers</p>
              <p>${followers}</p>
            </div>
            <div id="info">
              <p>Following</p>
              <p>${following}</p>
            </div>
            <div id="info">
              <p>Repo</p>
              <p>${public_repos}</p>
            </div>
          </div>
          <div>
          <a href=${html_url}>
            <button id="viewbtn">View Profile</button>
          </a>

          </div>
        </div>
      </div>
    </div>
        `;
  viewbtn.addEventListener("click", () => {
    userData.url;
  });
}
