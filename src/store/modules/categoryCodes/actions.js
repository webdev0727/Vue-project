import axios from 'axios';

export default {
  loadCategoryCodes({ commit }) {
    axios.get('/api/categoryCodes').then((response) => {
      commit('SET_categoryCodes', response.data);
    });
  },
};
