import momentWL from 'moment-with-locales-es6';

export function formatDate(date: string | undefined) {
  let newDate = new Date(date + 'Z');
  return momentWL(newDate).format('DD-MM-Y | HH:mm');
}
