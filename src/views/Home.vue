<template>
  <div class='home'>
    <v-container grid-list-xs>
      <v-row>
        <v-col cols='12'>
          <h3>New Documents</h3>
          <v-data-table
            :headers='newDocumentHeaders'
            :items='newDocuments'
            class='elevation-1'
            item-key='id'
          >
            <template slot="item.actions">
              <v-btn color="success">Process</v-btn>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols='12'>
        <h3>Expense Documents</h3>
        <v-btn color='success'>Create New</v-btn>
        </v-col>
        <v-col cols='12'>
          <v-data-table
            :headers='headers'
            :items='expenseDocuments'
            class='elevation-1'
            item-key='id'
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols='12'>
          <h3>Pdf Viewer Example</h3>
          <PdfViewer file-url="http://www.africau.edu/images/default/sample.pdf" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
/* eslint-disable no-bitwise */

import {
  VContainer, VRow, VCol, VDataTable,
} from 'vuetify/lib';
import { mapActions, mapState } from 'vuex';
import PdfViewer from '../components/PdfViewer.vue';

export default {
  name: 'Home',
  components: {
    PdfViewer,
    VContainer,
    VRow,
    VCol,
    VDataTable,
  },
  data() {
    return {
      headers: [{ text: 'Filename', value: 'filename' }],
      newDocumentHeaders: [{
        text: 'Id', value: 'id',
      },
      {
        text: 'File Name', value: 'filename',
      },
      {
        text: 'Link', value: 'link',
      },
      {
        text: '', value: 'actions',
      }],
      newDocuments: [
        {
          id: this.newId(),
          filename: 'test.pdf',
          link: 'http://www.africau.edu/images/default/sample.pdf',
        },
      ],
    };
  },
  computed: {
    ...mapState('expenseDocuments', ['expenseDocuments']),
  },
  mounted() {
    this.loadExpenseDocuments();
  },
  methods: {
    ...mapActions('expenseDocuments', ['loadExpenseDocuments']),
    newId() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = Math.random() * 16 | 0; const
          // eslint-disable-next-line no-mixed-operators
          v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    },
  },
};
</script>
