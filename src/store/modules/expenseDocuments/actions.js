import axios from 'axios';

export default {
  loadExpenseDocuments({ commit }) {
    axios.get('/api/expenseDocuments').then((response) => {
      commit('SET_expenseDocuments', response.data);
    });
  },
  createExpenseDocument({ commit, state }, expenseDocument) {
    axios.post('/api/expenseDocuments', expenseDocument);
    const expenseDocuments = { state };
    expenseDocuments.push(expenseDocument);
    commit('SET_expenseDocuments', expenseDocuments);
  },
};
