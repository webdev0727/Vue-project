import axios from 'axios';

export default {
  loadBudgetDocuments({ commit }) {
    axios.get('/api/budgetDocuments').then((response) => {
      commit('SET_budgetDocuments', response.data);
    });
  },
};
