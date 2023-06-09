const { Province, sampleProvinceData } = require('../PlanManipulator/backend/Province')

describe('province', function () {
    let asia;
    beforeEach(() => {
        asia = new Province(sampleProvinceData());
    });

    test('shortfall', () => {
        expect(asia.shortfall).toBe(5);
    });

    test('profit', () => {
        expect(asia.profit).toBe(230);
    });

    test('change production', () => {
        asia.producers[0].production = 20;
        expect(asia.shortfall).toBe(-6);
        expect(asia.profit).toBe(292);
    });

    test('zero demand', () => {
        asia.demand = 0;
        expect(asia.shortfall).toBe(-25);
        expect(asia.profit).toBe(0);
    });

    test('negative demand', () => {
        asia.demand = -1;
        expect(asia.shortfall).toBe(-26);
        expect(asia.profit).toBe(-10);
    });

    test('empty string demand', () => {
        asia.demand = "";
        expect(asia.shortfall).NaN;
        expect(asia.profit).NaN;
    })

    test('string for producers', () => {
        const data = {
            name: "String producers",
            producers: "",
            demand: 30,
            price: 20
        };

        const prov = new Province(data);
        expect(prov.shortfall).toBe(0);
    })
})

describe('no producers', function () {
    let noProducers;

    beforeEach(() => {
        const data = {
            name: "No proudcers",
            producers: [],
            demand: 30,
            price: 20
        };
        noProducers = new Province(data);
    })

    test('shortfall', function () {
        expect(noProducers.shortfall).toBe(30);
    })

    test('profit', function () {
        expect(noProducers.profit).toBe(0);
    })

})