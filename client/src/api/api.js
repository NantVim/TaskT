import * as axios from 'axios';
import store from "../redux/reduxStore";

const instance = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:8000/"
});

export const user = {
  auth() {
    try {
      return instance.post('auth', store.getState().authReducer)
        .then(res => {
          console.log(res.data ? 'Пользователь авторизован': 'Не верный email или пароль');
          return res.data;
        });
    }
    catch (e) {
      console.log(e);
    }
  }
};

export const sendObject = () => {
  try {
    return instance.post('send-object', store.getState().sendObjectCreatorReducer.object)
      .then(res => {return console.log(res.data)});
  }
  catch (e) {
    console.log(e)
  }
};

export const getTrafficObject = async () => {
  try {
    let response = await fetch('http://localhost:8000/traffic-table', {
      method: 'POST',
      mode: 'cors',
      body: ''
    });

    let r = response.json();

    return r;
  }
  catch (e) {
    console.log(e)
  }
};

