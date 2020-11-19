<template>
  <v-skeleton-loader
    :loading="!localDocumentExpense"
    transition="expand-transition"
    type="article"
  >
    <v-container grid-list-xs v-if="localDocumentExpense">
      <v-col cols="12">
        TODO: ./artwork/components/NewDocumentExpense.png
      </v-col>
      <v-col cols="12">
        <v-alert
          type="info"
        >
          Example: A simple text field with a save button and a skeleton loader.
        </v-alert>
        <v-text-field
          label="Example Text"
          v-model="localDocumentExpense.name"
        ></v-text-field>
        <v-btn color="success" @click="save">Save</v-btn>
      </v-col>
    </v-container>
  </v-skeleton-loader>
</template>

<script>
import {
  VAlert, VBtn, VSkeletonLoader, VTextField,
} from 'vuetify/lib';
import { mapState } from 'vuex';

export default {
  components: {
    VAlert,
    VBtn,
    VSkeletonLoader,
    VTextField,
  },
  name: 'NewDocumentExpense',
  props: {
    /**
    * Set the text box value. Default: undefined,
    */
    documentExpense: {
      type: Object,
      default: undefined,
    },
  },
  data() {
    return {
      /**
      * Local value used for property text
      */
      localDocumentExpense: undefined,
    };
  },
  computed: {
    /**
    * Get the category components
    */
    ...mapState('categoryCodes', ['categoryCodes']),
    /**
    * Get the category components
    */
    ...mapState('budgetDocuments', ['budgetDocuments']),
    /**
    * Get the loading state of the component
    */
    isLoading() {
      return this.documentExpense === undefined;
    },
  },
  watch: {
    text() {
      this.localDocumentExpense = this.documentExpense;
    },
  },
  created() {
    this.localDocumentExpense = this.documentExpense;
  },
  methods: {
    /** Method used to save the item
     */
    save() {
      /** Triggered when phone is updated.
      * @event save
      * @type {object}
      */
      this.$emit('save', { documentExpense: this.localDocumentExpense });
    },
  },
};
</script>

<docs>
# NewDocumentExpense example

'''js
<NewDocumentExpense :documentExpense="documentExpense" />
'''
</docs>
