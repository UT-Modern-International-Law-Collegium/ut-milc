// cf. https://qiita.com/unhurried/items/d1380ac52a9d84ccf74e
import tunnel from 'tunnel-ssh';

type Config = {
  host: string;
  port: number;
  username: string;
  password: string;
  localPort: number;
  dstHost: string;
  dstPort: number;
};

class Tunnel {
  private static connections: any[] = new Array<any>();
  public static async createConnection(config: Config) {
    let tnl = tunnel(config, (err: any, tnl: any) => {
      if (err) {
        throw err;
      } else {
        this.connections.push(tnl);
      }
    });
  }
  public static async closeAllConnections() {
    this.connections.forEach((tnl) => {
      tnl.close();
    });
  }
}

export default Tunnel;
