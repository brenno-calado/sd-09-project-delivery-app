const BASE_URL = 'http://localhost:3001';

export const fetchToLogin = (email, password, setInvalidUser, setRedirectTo) => {
  const body = {
    email,
    password,
  };

  const myHeadersToLogin = {
    'Content-Type': 'application/json',
  };

  fetch(`${BASE_URL}/login`, {
    headers: myHeadersToLogin,
    method: 'POST',
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((response) => {
      console.log(response);
      if (response.message) {
        setInvalidUser(true);
      } else {
        localStorage.setItem('User', JSON.stringify(response));
        setRedirectTo(true);
      }
    });
};

export const fetchToRegister = (name, email, password, setInvalidUser) => {
  const body = {
    name,
    email,
    password,
  };

  const myHeadersToRegister = {
    'Content-Type': 'application/json',
  };

  fetch('http://localhost:3001/register', {
    headers: myHeadersToRegister,
    method: 'POST',
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((response) => {
      console.log(response);
      if (response.message) {
        setInvalidUser(true);
      } else {
        console.log(response);
        localStorage.setItem('User', JSON.stringify(response));
      }
    });
};
