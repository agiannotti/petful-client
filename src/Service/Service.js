import API from '../config';

const ApiService = {
  getDog() {
    return fetch(`${API}/dogs`)
      .then((res) => {
        if (!res.ok) {
          return res.json().then((e) => Promise.reject(e));
        }
        return res.json();
      })
      .then((data) => {
        return data;
      })
      .catch((error) => console.error(error));
  },
  getCat() {
    return fetch(`${API}/cats`)
      .then((res) => {
        if (!res.ok) {
          return res.json().then((e) => Promise.reject(e));
        }
        return res.json();
      })
      .then((data) => {
        return data;
      })
      .catch((error) => console.error(error));
  },
};

export default ApiService;
