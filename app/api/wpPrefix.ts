export const wpPrefix = () => {
  const prefix: string | undefined = process.env.WP_BASE_URL;

  if (prefix) {
    return prefix;
  } else {
    throw new Error('WP_BASE_URL is not provided.');
  }
};
