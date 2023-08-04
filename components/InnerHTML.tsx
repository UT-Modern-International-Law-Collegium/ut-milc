"use client";

import { useEffect, useState, type FC } from "react";

type Props = {
  content: string;
  className?: string;
};

export const InnerHTML: FC<Props> = ({ content, className }) => {
  // hydration errorをを回避するため、mountされてからrenderingしている。
  const [didMount, setDidMount] = useState<boolean>(false);

  useEffect(() => {
    setDidMount(true);
  }, []);

  return didMount ? (
    <p dangerouslySetInnerHTML={{ __html: content }} className={className} />
  ) : null;
};
