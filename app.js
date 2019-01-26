document.getElementById("button1").addEventListener("click", getText);
document.getElementById("button2").addEventListener("click", getJson);
document.getElementById("button3").addEventListener("click", getExternal);

// Get local data
function getText() {
  fetch("test.txt")
    .then(function(res) {
      return res.text();
    })
    .then(function(data) {
      document.getElementById("output").innerHTML = data;
      //   console.log(data);
    })
    .catch(function(err) {
      console.log(err);
    });
}

// Get JSON data
function getJson() {
  fetch("posts.json")
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      output = "";
      data.forEach(post => {
        output += `<li>${post.title}: ${post.body} </li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch(function(err) {
      console.log(err);
    });
}

// Get data from External API
function getExternal() {
  fetch("https://api.github.com/users")
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      output = "";
      data.forEach(user => {
        output += `<li>${user.login} </li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch(function(err) {
      console.log(err);
    });
}
