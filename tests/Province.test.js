const { Province, sampleProvinceData } = require('../PlanManipulator/backend/Province')
test('province', () => {
    const asia = new Province(sampleProvinceData());

    expect(asia.shortfall).toBe(5);
});