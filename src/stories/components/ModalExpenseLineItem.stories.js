/* eslint-disable import/no-extraneous-dependencies */
import moxios from 'moxios';
import { object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { storyFactory } from '~storybook/util/helpers';
import store from '~src/store';

import ModalExpenseLineItemData from '~testData/ModalExpenseLineItem.json';
import ModalExpenseLineItem from '~src/components/ModalExpenseLineItem.vue';

// mock axios
moxios.install();

moxios.stubRequest('/api/expenseLineItem', {
  status: 200,
  response: ModalExpenseLineItemData,
});

export default { title: 'Components/ModalExpenseLineItem' };

const template = '<ModalExpenseLineItem :expenseLineItem="expenseLineItem" @save="save" />';

const story = storyFactory({
  ModalExpenseLineItem,
});

export const asLoading = () => story({
  template,
  store,
  props: {
    expenseLineItem: {
      default: object('expenseLineItem', undefined),
    },
  },
  methods: { save: action('save') },
});

export const asDefault = () => story({
  template,
  store,
  props: {
    expenseLineItem: {
      default: object('expenseLineItem', {}),
    },
  },
  methods: { save: action('save') },
});

export const withData = () => story({
  template,
  store,
  props: {
    expenseLineItem: {
      default: object('expenseLineItem', ModalExpenseLineItemData),
    },
  },
  methods: { save: action('save') },
});
