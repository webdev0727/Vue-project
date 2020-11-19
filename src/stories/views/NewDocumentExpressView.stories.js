/* eslint-disable import/no-extraneous-dependencies */
import moxios from 'moxios';
import { object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { storyFactory } from '~storybook/util/helpers';
import store from '~src/store';

import NewDocumentExpressViewData from '~testData/NewDocumentExpressView.json';
import NewDocumentExpressView from '~src/views/NewDocumentExpressView.vue';

// mock axios
moxios.install();

moxios.stubRequest('/api/documents', {
  status: 200,
  response: NewDocumentExpressViewData,
});

export default { title: 'Views/NewDocumentExpressView' };

const template = '<NewDocumentExpressView :documents="documents" @save="save" />';

const story = storyFactory({
  NewDocumentExpressView,
});

export const asLoading = () => story({
  template,
  store,
  props: {
    documents: {
      default: object('documents', undefined),
    },
  },
  methods: { save: action('save') },
});

export const asDefault = () => story({
  template,
  store,
  props: {
    documents: {
      default: object('documents', {}),
    },
  },
  methods: { save: action('save') },
});

export const withData = () => story({
  template,
  store,
  props: {
    documents: {
      default: object('documents', NewDocumentExpressViewData),
    },
  },
  methods: { save: action('save') },
});
