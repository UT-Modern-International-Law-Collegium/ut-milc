const wpPrefix = () => {
  const prefix: string | undefined = process.env.WP_BASE_URL;

  if (prefix) {
    return prefix;
  } else {
    throw new Error("WP_BASE_URL is not provided.");
  }
};

const nextPrefix = () => {
  const prefix = process.env.NEXT_PUBLIC_BASE_URL;

  if (!prefix) {
    throw new Error("NEXT_PUBLIC_BASE_URL is not defined");
  } else {
    return prefix;
  }
};

export { nextPrefix, wpPrefix };
