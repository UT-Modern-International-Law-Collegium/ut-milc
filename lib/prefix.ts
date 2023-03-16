export const prefix = () => {
  const prefix: string | undefined = process.env.NEXT_PUBLIC_BASE_URL;

  if (prefix) {
    return prefix;
  } else {
    throw new Error('NEXT_PUBLIC_BASE_URL is not provided.');
  }
};
