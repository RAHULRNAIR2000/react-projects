
import { atom } from 'recoil';

export const starReviewsState = atom({
 key: 'starReviewsState',
 default: {
    name: '',
    review: '',
 },
});