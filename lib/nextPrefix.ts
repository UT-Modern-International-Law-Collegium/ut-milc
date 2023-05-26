export const nextPrefix = () => {
  const prefix = process.env.NEXT_PUBLIC_BASE_URL;

  if (!prefix) {
    throw new Error('NEXT_PUBLIC_BASE_URL is not defined');
  } else {
    return prefix;
  }
};
