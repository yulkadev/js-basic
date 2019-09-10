const {
    integer,
    float,
    getInfinity,
    getMinusInfinity,
    getNaN,
    favoritePet,
    favoritePetSound,
    getPetInfo,
} = require('../data-types');

describe('Lesson 3 Data Types', () => {
    it('[integer] should be integer', () => {
        const isInteger = Number(integer) === integer && integer % 1 === 0;

        expect(isInteger).toBe(true);
    });

    it('[float] should be float', () => {
        const isFloat = Number(float) === float && float % 1 !== 0;

        expect(isFloat).toBe(true);
    });

    it('[getInfinity] should work correctly', () => {
        const result = getInfinity();

        expect(result).toBe(Infinity);
    });

    it('[getMinusInfinity] should work correctly', () => {
        const result = getMinusInfinity();

        expect(result).toBe(-Infinity);
    });

    it('[getNaN] should work correctly', () => {
        const result = getNaN();

        expect(result).toBe(NaN);
    });

    it('[favoritePet] should be string', () => {
        expect(typeof favoritePet).toBe('string');
    });

    it('[favoritePet] shouldn`t be empty string', () => {
        expect(favoritePet.length).toBeGreaterThanOrEqual(1);
    });

    it('[favoritePetSound] should be string', () => {
        expect(typeof favoritePetSound).toBe('string');
    });

    it('[favoritePetSound] shouldn`t be empty string', () => {
        expect(favoritePetSound.length).toBeGreaterThanOrEqual(1);
    });

    it('[getPetInfo] should work correctly', () => {
        const result = getPetInfo();
        const expectedResult = `My favorite pet ${favoritePet}, can do ${favoritePetSound}`;

        expect(result).toEqual(expectedResult);
    });
});