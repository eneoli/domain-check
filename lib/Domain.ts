import whois from 'whois-json';

export class Domain {

  public static async isFree(domain: string): Promise<boolean> {
    const d = new this(domain);
    return await d.isFree();
  }
  private domainUrl: string;
  private whoisSearch: any;

  public constructor(domain: string) {
    this.domainUrl = domain;
  }

  public async isFree(): Promise<boolean> {
    const w = await this.getWhois();
    await this.sleep(400); // whois server may block you if there to much requests. so wait... :(
    switch (true) {
      case !!w.domain: {
        if ((w.status === 'free' || w.status === 'AVAILABLE') && !(w.registrar)) {
          return true;
        } else {
          return false;
        }
      }
      case (!!w.notice): {
        return true;
      }
      case (!!w.domainName): {
        return false;
      }
      default:
        return true;
    }
  }

  private async sleep(ms: number) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  private async getWhois(): Promise<any> {
    if (!this.whoisSearch) {
      this.whoisSearch = await whois(this.domainUrl);
    }
    return this.whoisSearch;
  }
}