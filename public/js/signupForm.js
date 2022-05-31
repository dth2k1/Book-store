const signupForm = document.querySelector('#form-signup');
const signup = (name, email, password, passwordConfirm) => {
  console.log(passwordConfirm);
  axios({
    method: 'post',
    url: '/api/v1/users/signup',
    data: {
      name,
      email,
      password,
      passwordConfirm,
    },
  })
    .then((res) => {
      try {
        if (res.data.status === 'success') {
          alert('Signup successfully!, Please Login to site');
        }
      } catch (e) {
        console.log(e);
      }
    })
    .catch((e) => {
      alert(e.response.data.message);
    });
};
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.querySelector('#name--signup').value;
  const email = document.querySelector('#email--signup').value;
  const password = document.querySelector('#password--signup').value;
  const passwordConfirm = document.querySelector('#passwordConfirm--signup').value;

  signup(name, email, password, passwordConfirm);
});
