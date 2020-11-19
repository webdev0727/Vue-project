<template>
  <v-skeleton-loader
    :loading="!localExpenseLineItem"
    transition="expand-transition"
    type="article"
  >
    <v-container grid-list-xs v-if="localExpenseLineItem">
      <v-col cols="12">
        TODO: ./artwork/components/ModalExpenseLineItem.png
      </v-col>
      <v-col cols="12">
        <v-alert
          type="info"
        >
          Example: A simple text field with a save button and a skeleton loader.
        </v-alert>
        <v-text-field
          label="Example Text"
          v-model="localExpenseLineItem.name"
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

export default {
  components: {
    VAlert,
    VBtn,
    VSkeletonLoader,
    VTextField,
  },
  name: 'ModalExpenseLineItem',
  props: {
    /**
    * Set expenseLineItem. Default: undefined,
    */
    expenseLineItem: {
      type: Object,
      default: undefined,
    },
  },
  data() {
    return {
      /**
      * Local value used for property text
      */
      localExpenseLineItem: undefined,
    };
  },
  computed: {
    /**
    * Get the loading state of the component
    */
    isLoading() {
      return this.expenseLineItem === undefined;
    },
  },
  watch: {
    text() {
      this.localExpenseLineItem = this.expenseLineItem;
    },
  },
  created() {
    this.localExpenseLineItem = this.expenseLineItem;
  },
  methods: {
    /** Method used to save the item
     */
    save() {
      /** Triggered when phone is updated.
      * @event save
      * @type {object}
      */
      this.$emit('save', { expenseLineItem: this.localExpenseLineItem });
    },
  },
};
</script>

<docs>
# ModalExpenseLineItem example

'''js
<ModalExpenseLineItem :expenseLineItem="expenseLineItem" />
'''
</docs>
