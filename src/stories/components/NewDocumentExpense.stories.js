/* eslint-disable import/no-extraneous-dependencies */
import moxios from 'moxios';
import { object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { storyFactory } from '~storybook/util/helpers';
import store from '~src/store';

import NewDocumentExpenseData from '~testData/NewDocumentExpense.json';
import NewDocumentExpense from '~src/components/NewDocumentExpense.vue';

// mock axios
moxios.install();

moxios.stubRequest('/api/documentExpense', {
  status: 200,
  response: NewDocumentExpenseData,
});

export default { title: 'Components/NewDocumentExpense' };

const template = '<NewDocumentExpense :documentExpense="documentExpense" @save="save" />';

const story = storyFactory({
  NewDocumentExpense,
});

export const asLoading = () => story({
  template,
  store,
  props: {
    documentExpense: {
      default: object('documentExpense', undefined),
    },
  },
  methods: { save: action('save') },
});

export const asDefault = () => story({
  template,
  store,
  props: {
    documentExpense: {
      default: object('documentExpense', {}),
    },
  },
  methods: { save: action('save') },
});

export const withData = () => story({
  template,
  store,
  props: {
    documentExpense: {
      default: object('documentExpense', NewDocumentExpenseData),
    },
  },
  methods: { save: action('save') },
});
