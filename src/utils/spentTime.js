export default function spentTime(time) {
  const actualTime = new Date();

  const pastTime = new Date(time);
  const difference = actualTime - pastTime;
  const seconds = Math.floor(difference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (years > 0) {
    return `${years} Ano${years > 1 ? 's' : ''} atrás`;
  } else if (months > 0) {
    return `${months} ${months > 1 ? 'Meses' : 'Mês'} atrás`;
  } else if (days > 0) {
    return `${days} Dia${days > 1 ? 's' : ''} atrás`;
  } else if (hours > 0) {
    return `${hours} Hora${hours > 1 ? 's' : ''} atrás`;
  } else if (minutes > 0) {
    return `${minutes} Minuto${minutes > 1 ? 's' : ''} atrás`;
  } else {
    return `${seconds > 0 ? seconds : 1} Segundo${
      seconds > 1 ? 's' : ''
    } atrás`;
  }
}
