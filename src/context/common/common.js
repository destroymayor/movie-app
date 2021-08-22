import { atom } from 'recoil';

export const intersectionObserverState = atom({
  key: 'intersectionObserverState',
  default: {
    isVisible: false,
  },
});
