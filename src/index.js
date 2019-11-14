/* eslint-disable prefer-destructuring */
/* note: known Parcel.js limitation */
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
/* eslint-disable prefer-destructuring */

const AUTH_QUERY = `client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}}`;

/* async */ function searchUsersByQuery(query) {
  const baseUrl = 'https://api.github.com/search/users';
  const queryString = `?q=${query}&${AUTH_QUERY}`;

  const url = baseUrl + queryString;

  return fetch(url)
    .then(res => res.json())
    .then(data => {
      const { items } = data;
      return items.map(profile => profile.login);
    })
    .catch(e => console.error(e));

  /*
  let data;
  try {
    const response = await fetch(url);
    data = await response.json();
  } catch (e) {
    console.error(e);
  }
  const { items } = data;
  return items.map(profile => profile.login);
  */
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
