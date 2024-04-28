const requestURL = 'https://api.github.com/users/Vishalbelwal';
const xhr = new XMLHttpRequest();
xhr.open('GET', requestURL);
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      let data = JSON.parse(xhr.responseText);
      let avatar = data.avatar_url;
      let name = data.login;
      let follower = data.followers;
      console.log(data.login);
      console.log(avatar);
      console.log(data.followers);  
      
      document.querySelector(".card-image").setAttribute("src", avatar);
      document.querySelector('h2').innerHTML = name;
      document.querySelector('h2').style.color = "white";
      document.querySelector('.followers').innerHTML = follower;
      document.querySelector('.followers').style.color = "white";
      document.querySelector('h1').style.color = "white";
    } 
  }
};
xhr.send();

