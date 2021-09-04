window.onload = async function () {
  const data = await axios.get(`https://api.github.com/users/JeanMieses`)
    .then(data => {
      return data.data;
    })

    document.querySelector('.profile-img').src = data.avatar_url;

    document.querySelector('.name').innerText = data.name;
    document.querySelector('.username').innerText = `@${data.login}`;
    document.querySelector('.joined-in').innerText = data.created_at;
    const bio = data.bio || 'This profile has no bio';
    document.querySelector('.bio').innerText = bio;

    document.querySelector('.repos').innerText = data.public_repos;
    document.querySelector('.followers').innerText = data.followers;
    document.querySelector('.following').innerText = data.following;

    const location = data.location || 'Somewhere far away';
    document.querySelector('.location').innerText = location;

    const blog = data.blog || 'Not Blog Available'
    document.querySelector('.github-blog').innerText = blog;
    document.querySelector('.github-blog').href = blog;

    const twitter = `@${data.twitter_username}` || 'Not Available';
    document.querySelector('.twitter-username').innerText = twitter;

    const company = data.company || 'Workplace Not Available';
    document.querySelector('.company').innerText = company;
}


document.querySelector('form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = await axios.get(`https://api.github.com/users/${e.target[0].value}`)
    .then(data => {
      return data.data;
    })

    console.log(data);

    document.querySelector('.profile-img').src = data.avatar_url;

    document.querySelector('.name').innerText = data.name;
    document.querySelector('.username').innerText = `@${data.login}`;
    document.querySelector('.joined-in').innerText = data.created_at;
    const bio = data.bio || 'This profile has no bio';
    document.querySelector('.bio').innerText = bio;

    document.querySelector('.repos').innerText = data.public_repos;
    document.querySelector('.followers').innerText = data.followers;
    document.querySelector('.following').innerText = data.following;

    const location = data.location || 'Somewhere far away';
    document.querySelector('.location').innerText = location;

    const blog = data.blog || 'Not Blog Available'
    document.querySelector('.github-blog').innerText = blog;
    document.querySelector('.github-blog').href = blog;

    const twitter = `@${data.twitter_username}` || 'Not Available';
    console.log(data.twitter_username);
    document.querySelector('.twitter-username').innerText = twitter;

    const company = data.company || 'Workplace Not Available';
    document.querySelector('.company').innerText = company;

  e.target[0].value = '';
})
