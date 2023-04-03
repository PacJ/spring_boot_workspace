import axios from 'axios';
import { baseUrl } from '../apiurl';

const getAction = async (dispatch) => {
    await axios
        .get(`${baseUrl}/todo/all`) //.get(baseUrl+'/todo/all')
        .then((response) => {
            dispatch({type: 'LIST', todos: response.data});
        })
        .catch((error) => {
            console.log(error);
        });
};

const insertAction = async (input) => {
    await axios
      .post(baseUrl + "/todo/", { todoname: input })
      .then((response) => {
        window.location.replace('/');
      });
};

const deleteAction = async (id) => {
    await axios
      .delete(baseUrl + "/todo/" + id)
      .then((response) => {
        window.location.replace('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

const updateAction = async (id, completed) => {
    await axios
      .put(baseUrl + "/todo/" + id + "/" + completed)
      .then((response) => {
        window.location.replace('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  export {getAction, insertAction, deleteAction, updateAction};