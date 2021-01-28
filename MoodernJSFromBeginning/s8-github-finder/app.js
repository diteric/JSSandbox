const gitHub = new GitHub();

// bind keyup event to the input
document.getElementById('searchUser').addEventListener('keyup', (e) => {
  const userInput = e.target.value;

  if (userInput !== '') {
    gitHub.getUser(userInput).then((data) => {
      if (data.profile.message === 'Not Found') {
        // show alert
      } else {
        // show profile
      }
    });
  } else {
    // clear data
  }
});
