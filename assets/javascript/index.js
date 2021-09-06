const bio = document.querySelector('.bio');
const joined = document.querySelector('.joined-in');
const followsFollwers = document.querySelector('.repos-followers-following');
const repo = document.querySelector('.repos');
const followers = document.querySelector('.followers');
const following = document.querySelector('.following');
const location1 = document.querySelector('.location');
const blog = document.querySelector('.github-blog');
const twitter_username = document.querySelector('.twitter-username');
const company = document.querySelector('.company');
const username = document.querySelector('.username');
const name = document.querySelector('.name');

// onload, we going to display my github information... Follow me guys!
window.onload = async () => {
  const data = await axios.get(`https://api.github.com/users/JeanMieses`)
    .then(data => {
      return data.data;
    })
    displayUserData(data);
}

// this toggle between light and dark mode
document.querySelector('.toggler').addEventListener('click', (e) => {
  document.querySelector('h1').classList.toggle('h1-lightmode');
  document.querySelector('.light-mode-text-toggle').classList.toggle('h1-lightmode');
  document.querySelector('body').classList.toggle('light-background');
  document.querySelector('.user-card').classList.toggle('user-card-lightmode');
  name.classList.toggle('h1-lightmode');
  bio.classList.toggle('bio-lightmode');
  joined.classList.toggle('joined-ing-lightmode');
  followsFollwers.classList.toggle('repos-followers-following-lightmode');
  repo.classList.toggle('text-color-lightmode');
  followers.classList.toggle('text-color-lightmode');
  following.classList.toggle('text-color-lightmode');

  blog.classList.toggle('bio-lightmode');
  location1.classList.toggle('bio-lightmode');
  twitter_username.classList.toggle('bio-lightmode');
  company.classList.toggle('bio-lightmode');
  document.querySelector('#search-user').classList.toggle('input-lightmode');
  document.querySelector('.form').classList.toggle('input-lightmode');
})


document.querySelector('form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = await axios.get(`https://api.github.com/users/${e.target[0].value}`)
    .then(data => { return data.data; })

    displayUserData(data);
    e.target[0].value = '';
})

// this function display the data for the user when we clikc in search
const displayUserData = (data) => {
  document.querySelector('.profile-img').src = data.avatar_url;
  name.innerText = data.name;
  username.innerText = `@${data.login}`;

  joined.innerText = dateFormat(data.created_at);
  bio.innerText = data.bio || 'This profile has no bio';;

  repo.innerText = data.public_repos;
  followers.innerText = data.followers;
  following.innerText = data.following;

  location1.innerText = data.location || 'Not Location'
  blog.innerText = data.blog || 'Not Blog';
  blog.href = data.blog? `https://${data.blog}` : '#'
  twitter_username.innerText = (data.twitter_username===null) ? 'Not Twitter' : `@${data.twitter_username}`
  company.innerText = data.company || 'Not Workplace';
}

const dateFormat = (str) => {
  const year = new Date(Date.parse(str)).getFullYear();
  const month = new Date(str).toLocaleString('ENG', {month: 'long'});
  return `Joined ${month}, ${year}`
}
