import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {
    const validPublisher = ['DC Comics', 'Marvel Comics'];
    if(!validPublisher.includes(publisher)){
        throw new Error(`${publisher} is not a vaid publisher`);
    }
    console.log(publisher)
    return heroes.filter(heroe => heroe.publisher === publisher );
}