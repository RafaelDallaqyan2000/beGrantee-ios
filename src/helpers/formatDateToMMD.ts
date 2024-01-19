import momentWL from 'moment-with-locales-es6';

export function formatDateToMMD(date: string, format = 'DD/MM') {
  if (!date) {
    return null;
  }
  return momentWL(date).format(format);
}
