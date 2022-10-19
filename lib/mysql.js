// cf. https://www.simplenextjs.com/posts/next-mysql
import mysql from 'serverless-mysql';
import Tunnel from './tunnel';
import path from 'path';
import fs from 'fs';
import mysql2 from 'mysql2';

const initDb = async () => {
  const privateKeyPath = path.resolve(
    __dirname,
    process.env.NEXT_PUBLIC_SSH_KEY_PATH
  );
  // const tunnelData = {
  //   host: process.env.SSH_SERVER_HOST,
  //   port: Number(process.env.SSH_SERVER_PORT),
  //   username: process.env.SSH_SERVER_USERNAME,
  //   password: process.env.SSH_SERVER_PASSWORD,
  //   dstHost: process.env.DST_SERVER_HOST,
  //   dstPort: Number(process.env.DST_SERVER_PORT),
  //   localPort: 3307 /* NOTE: ここのportは任意。 */,
  //   localHost: '127.0.0.1',
  //   privateKey: fs.readFileSync(privateKeyPath),
  //   passphrase: process.env.DST_SERVER_PASSPHRASE,
  //   keepAlive: true,
  // };
  // NOTE: 以下の出力は開発の便宜上、残しておく。
  console.log(`privateKeyPath is ${privateKeyPath}`);
  console.log(`tunnelData is below`);
  // console.log({ tunnelData });
  await Tunnel.createConnection({
    host: process.env.SSH_SERVER_HOST,
    port: process.env.SSH_SERVER_PORT,
    username: process.env.SSH_SERVER_USERNAME,
    password: process.env.SSH_SERVER_PASSWORD,
    dstHost: process.env.DST_SERVER_HOST,
    dstPort: process.env.DST_SERVER_PORT,
    localPort: 3306,
    localHost: '127.0.0.1',
    privateKey: require('fs').readFileSync(privateKeyPath),
    passphrase: process.env.DST_SERVER_PASSPHRASE,
  });
  // ここから下がトンネルの中で行う作業。
  const db = mysql({
    config: {
      host: process.env.MYSQL_HOST,
      database: process.env.MYSQL_DATABASE,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      ssl: {
        rejectUnauthorized: false /* <- ここを適切に記述すればできると思う */,
      },
    },
    library: mysql2,
  });
  await Tunnel.closeAllConnections();
  // NOTE: 以下のログも、開発の便宜上残しておく。
  console.log(db.config());
  return db;
};

export const excuteQuery = async (query) => {
  // NOTE: 開発の便宜上、この関数内でログを多く出力させている。
  try {
    console.log({ query });
    const db = await initDb();
    const results = await db.query(query);
    console.log({ results });
    await db.end();
    return results;
  } catch (error) {
    console.error(`error at executeQuery: ${error}`);
    return { error };
  }
};
