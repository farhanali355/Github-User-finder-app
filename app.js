// Function to toggle between dark and light mode
function toggleMode() {
    const body = document.body;
    const icon = document.getElementById('mode-icon');
    const modeText = document.getElementById('mode-text');

    if (body.classList.contains('light-mode')) {
      body.classList.replace('light-mode', 'dark-mode');
      icon.classList.replace('fa-sun', 'fa-moon');
      modeText.textContent = 'Dark Mode';
    } else {
      body.classList.replace('dark-mode', 'light-mode');
      icon.classList.replace('fa-moon', 'fa-sun');
      modeText.textContent = 'Light Mode';
    }
  }

const main = document.getElementById('userProfile');
const userInput = document.getElementById('searchInput');

const userGet = async (username) => {
const API = `https://api.github.com/users/${userInput.value}`
const response = await fetch(API);
const data = await response.json();
if (userInput.value = "") {
    alert('please fill the output')
}
else {
    const card = `     
    <div id="box-container">          
    <div class="card">
    <div class="image">
    <img src="${data.avatar_url}">
    <h2 id="h22">${data.name}</h2>
    <p> Created At ${data.created_at || "Not Found"}</p>
    
    </div>
    <div id="box-1-sec">
    <p>${data.bio}</p>
    <div id="following">
    <div>
    Repos <h2>${data.public_repos || "Not Found"}</h2>
    </div>
    <div>
    Followers <h2>${data.followers || "Not Found"}</h2>
    </div>
    <div>
    Following <h2>${data.following || "Not Found"}</h2>
    </div>
    </div>
    <div id="repos">
    
    </div>
    <div id="link-a">
    
    <div><a href=""><i class="fa-solid fa-location-dot"></i> &nbsp;${data.location || "Not Found"}</a></div>
    <div><a href=""><i class="fa-brands fa-twitter"></i>&nbsp;${data.twitter_username || "Not Found"}</a></div>
    </div>
    <div id="link-a-2">
    
    <div><a href=""><i class="fa-solid fa-link"></i>&nbsp;${data.blog || "Not Found"}</a></div>
    <div><a href=""><i class="fa-brands fa-github"></i>&nbsp;${data.url || "Not Found"}</a></div>
    </div>
    </div>
    
    </div> 
    
    </div>    
    `
    main.innerHTML = card;
}

console.log(data);

}