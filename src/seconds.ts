export const minutes = (count: number) => count * 60;
export const hours = (count: number) => minutes(count * 60);

export default {
  minutes,
  hours,
};
