import { PropType } from 'vue';

export const variant = {
    outside: 'outside',
  inside: 'inside',
} as const;

export const SwitchProps = {
  modelValue: {
    type: Boolean,
    default: false,
  },
  label1: {
    type: String,
    default: '',
  },
  label2: {
    type: String,
    default: '',
  },
  variant: {
    type: String as PropType<keyof typeof variant>,
    default: 'inside',
  },
  activeColor: {
    type: String,
    default: 'bg-blue-500',
  },
  inactiveColor: {
    type: String,
    default: 'bg-gray-400',
  },
  size: {
    type: String as PropType<'sm' | 'md' | 'lg' | 'xl'>,
    default: 'md',
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
};
