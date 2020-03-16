/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

let myObj = axios.get('https://api.github.com/users/cknoettg')
  .then(response => {
    cards.appendChild(cardCreator(response.data));
    console.log(response);
  })
  .catch(err => {
    console.log(err);
  })

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   it is a single object with 31 keys

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

function cardCreator(dataObj){
  //we don't have to iterate because this is a single object, not multiple objects
  let card = document.createElement("div");
  card.classList.add("card");
  let img = document.createElement("img");
  img.src = dataObj.avatar_url;
  card.appendChild(img);
  let cardInfo = document.createElement("div");
  cardInfo.classList.add("card-info");
  card.appendChild(cardInfo);
  let h3 = document.createElement("h3");
  h3.classList.add("name");
  h3.textContent = dataObj.name;
  let uname = document.createElement("p");
  uname.classList.add("username");
  uname.textContent = dataObj.login;
  let location = document.createElement("p");
  location.textContent = dataObj.location;
  let profile = document.createElement("p");
  let anchor = document.createElement("a");
  profile.appendChild(anchor);
  anchor.href = dataObj.html_url;
  anchor.textContent = dataObj.html_url;
  let followers = document.createElement("p");
  followers.textContent = dataObj.followers;
  let following = document.createElement("p");
  following.textContent = dataObj.following;
  let bio = document.createElement("p");
  bio.textContent = dataObj.bio;
  cardInfo.appendChild(h3);
  cardInfo.appendChild(uname);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  return card;
};

let cards = document.querySelector(".cards");

//moved function up to promise above
//cards.appendChild(cardCreator(myObj.data));

