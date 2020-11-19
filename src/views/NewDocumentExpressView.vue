<template>
  <NewDocumentExpense :documentExpense="{}" />
</template>

<script>
import { mapActions } from 'vuex';
import NewDocumentExpense from '../components/NewDocumentExpense.vue';

export default {
  components: {
    NewDocumentExpense,
  },
  name: 'NewDocumentExpressView',
  created() {
    this.loadCategoryCodes();
    this.loadBudgetDocuments();
  },
  methods: {
    /** Setup vuex load methods
     */
    ...mapActions('categoryCodes', ['loadCategoryCodes']),
    ...mapActions('budgetDocuments', ['loadBudgetDocuments']),
  },
};
</script>

<docs>
# NewDocumentExpressView example

'''js
<NewDocumentExpressView />
'''
</docs>
