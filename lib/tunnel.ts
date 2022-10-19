// cf. https://qiita.com/unhurried/items/d1380ac52a9d84ccf74e
import { Server } from 'net';
import tunnel from 'tunnel-ssh';

type Config = {
  host: string;
  port: number;
  username: string;
  password: string;
  localPort: number;
  dstHost: string;
  dstPort: number;
  privateKey: any;
  passphrase: string;
  keepAlive: boolean;
};

class Tunnel {
  private static connections: Server[] = new Array<Server>();
  public static async createConnection(config: Partial<Config>) {
    // NOTE: 開発の便宜上このログは残しておく。
    console.log('tunnel.createConnection is called.');
    let tnl: Server = tunnel(config, (err: Error, tnl: Server) => {
      if (err) {
        throw err;
      } else {
        this.connections.push(tnl);
      }
    });
    tnl.on('error', (err: Error) => {
      console.error(err);
    });
  }
  public static async closeAllConnections() {
    this.connections.forEach((tnl: Server) => {
      tnl.close();
    });
  }
}

export default Tunnel;
