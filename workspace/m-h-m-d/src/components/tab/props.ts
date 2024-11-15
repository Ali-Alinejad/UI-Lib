import { PropType } from 'vue';
import { createBgColorProp, createColorProp } from '../../composables/ColorComposable';

export interface Tab {
  label: string;
  value: number;
  content: string;
}

export const variant = {
  default: 'default',
  Underline: 'underline',
  bordered: 'bordered',
  Link: 'link',
} as const;

export const TabProps = {
  modelValue: {
    type: String,
    default: 1,
  },
  tabs: {
    type: Array as PropType<Tab[]>,
    required: true,
    default: () => [],
  },
  variant: {
    type: String as PropType<keyof typeof variant>,
    default: 'default',
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
  ...createColorProp(),
  ...createBgColorProp(),
};
