import whois from 'whois-json';

export class Domain {
    private domainUrl: string;
    private whoisSearch: any;
    public constructor(domain: string) {
        this.domainUrl = domain;
    }

    private static async isFree(domain: string): Promise<boolean> {
        const d = new this(domain);
        return await d.isFree();
    }

    private async getWhois(): Promise<any> {
        if (!this.whoisSearch) {
            this.whoisSearch = await whois(this.domainUrl);
        }
        return this.whoisSearch;
    }

    public async isFree(): Promise<boolean> {
        const w = await this.getWhois();
       switch (true) {
           case !!w.domain: {
               if ((w.status === 'free' || w.status === 'AVAILABLE') && !(w.registrar))
               {
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
}