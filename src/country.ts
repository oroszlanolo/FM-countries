export interface Country {
    cca3: string,
    name: {
        common: string,
        nativeName: {
            [id: string]: {
                official: string,
                common: string
            }
        }
    },
    tld: string[],
    currencies: {
        [id: string] : {
            name: string
        }
    },
    capital: string,
    region: string,
    subregion: string,
    languages: {
        [id: string] : string
    }
    borders: string[],
    population: number,
    flags: {
        png: string,
        svg: string,
        alt: string
    }
}