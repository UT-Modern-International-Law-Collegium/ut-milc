import { wpPrefix } from '../wpPrefix';

export const GET = async () => {
  const res = await fetch(
    `${wpPrefix()}/posts?&categories=3&_fields=id,content,title,tags`
  );
  const data = await res.json();  
};
