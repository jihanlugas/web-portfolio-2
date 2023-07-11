import moment from 'moment';

export const displayDate = (value, format = 'DD MMM YYYY') => {
  if (value != null) {
    return moment(value).format(format);
  } else {
    return '';
  }
};

export const displayTIme = (value, format = 'HH:mm') => {
  if (value != null) {
    return moment(value).format(format);
  } else {
    return '';
  }
};

export const displayDateTime = (value, format = 'DD MMM YYYY HH:mm') => {
  if (value != null) {
    return moment(value).format(format);
  } else {
    return '';
  }
};

export const dateDiff = (start, end) => {
  var dateStart = moment(start)
  var dateEnd = moment(end)

  var diffYear = dateEnd.diff(dateStart, 'years')
  var diffMonth = dateEnd.diff(dateStart, 'months')

  return diffYear + ' yrs ' + diffMonth % 12 + ' mos'
}