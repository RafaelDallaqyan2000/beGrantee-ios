import momentWL from 'moment-with-locales-es6';

export function formatDate(date: string | undefined) {
  return momentWL(date).format('DD-MM-Y | HH:mm');
}
