const myAwesomePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 2000);
})
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.error(err);
  });
