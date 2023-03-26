import moment from 'moment';
import { CARD_DATE_FORMAT } from '../data';

export const handleStat = stat => {
  return Math.abs(stat) > 999 ? Math.sign(stat) * ((Math.abs(stat) / 1000).toFixed(1)) + 'k' : Math.sign(stat) * Math.abs(stat);
};

export const handleDate = date => {
  return moment(date).format(CARD_DATE_FORMAT);
};