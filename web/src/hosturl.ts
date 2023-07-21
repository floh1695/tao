import dotenv from 'dotenv';

dotenv.config();

export const hosturl = (path: string = ''): string => {
  const root = process.env.HOSTNAME == null
    ? `http://localhost:${process.env.PORT}`
    : `https://${process.env.HOSTNAME}`;
  const separator = path.startsWith('/')
    ? ''
    : '/';
  const url = `${root}${separator}${path}`

  return url;
};

export default hosturl;
