console.log(1);
const loginForm = document.querySelector('#form-signin');
const logoutBtn = document.getElementById('logout');
const login = (email, password) => {
  axios({
    method: 'post',
    url: 'http://localhost:3000/api/v1/users/login',
    data: {
      email,
      password,
    },
  })
    .then((res) => {
      try {
        if (res.data.status === 'success') {
          window.setTimeout(() => {
            location.assign('/');
          }, 1000);
        }
      } catch (e) {
        console.log(e.response.data);
      }
    })
    .catch((e) => {
      alert(e.response.data.message);
    });
};
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  login(email, password);
});
// logout
const logout = () => {
  console.log(1);
  axios({
    method: 'get',
    url: 'http://localhost:3000/api/v1/users/logout',
  })
    .then((res) => {
      try {
        if (res.data.status === 'success') {
          location.reload(true);
        }
      } catch (e) {
        console.log(e.response.data);
      }
    })
    .catch((e) => {
      console.log(e);
    });
};
logoutBtn.addEventListener('click', logout);
