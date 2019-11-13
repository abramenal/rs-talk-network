// const CLIENT_ID = process.env.CLIENT_ID;
// const CLIENT_SECRET = process.env.CLIENT_SECRET;

/* async */ function searchUsersByQuery(query) {
  const baseUrl = 'https://api.github.com/search/users';
  const queryString = `?q=${query}`;

  const url = baseUrl + queryString;

  return fetch(url)
    .then(res => res.json())
    .then(data => {
      const { items } = data;
      return items.map(profile => profile.login);
    })
    .catch(e => console.error(e));

  // try {
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   console.log(data);
  // } catch (e) {
  //   console.error(e);
  // }
}

function renderLoginList(loginList) {
  const ul = document.createElement('ul');

  loginList.forEach(login => {
    const li = document.createElement('li');
    li.innerText = login;
    ul.appendChild(li);
  });

  document.body.append(ul);
}

searchUsersByQuery('abra').then(loginList => {
  renderLoginList(loginList);
});
