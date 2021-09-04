window.onload = async () => {
  const data = await axios.get(`https://api.github.com/users/JeanMieses`)
    .then(data => {
      return data.data;
    })
    displayUserData(data);
}

document.querySelector('form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = await axios.get(`https://api.github.com/users/${e.target[0].value}`)
    .then(data => { return data.data; })

    displayUserData(data);
    e.target[0].value = '';
})

const displayUserData = (data) => {
  document.querySelector('.profile-img').src = data.avatar_url;
  document.querySelector('.name').innerText = data.name;
  document.querySelector('.username').innerText = `@${data.login}`;

  document.querySelector('.joined-in').innerText = dateFormat(data.created_at);
  document.querySelector('.bio').innerText = data.bio || 'This profile has no bio';;

  document.querySelector('.repos').innerText = data.public_repos;
  document.querySelector('.followers').innerText = data.followers;
  document.querySelector('.following').innerText = data.following;

  document.querySelector('.location').innerText = data.location || 'Not Location'
  document.querySelector('.github-blog').innerText = data.blog || 'Not Blog';
  document.querySelector('.github-blog').href = data.blog? `https://${data.blog}` : '#'
  document.querySelector('.twitter-username').innerText = (data.twitter_username===null) ? 'Not Twitter' : `@${data.twitter_username}`
  document.querySelector('.company').innerText = data.company || 'Not Workplace';
}

const dateFormat = (str) => {
  const year = new Date(Date.parse(str)).getFullYear();
  const month = new Date(str).toLocaleString('ENG', {month: 'long'});
  return `Joined ${month}, ${year}`
}
