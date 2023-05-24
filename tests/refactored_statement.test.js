const statement = require('../theatre/refactored_statement');
const invoice = require('../theatre/invoices.json')[0];
const plays = require('../theatre/plays.json');

test(`testing statement for customer ${invoice['customer']}`, () => {
    let expected_result = "Statement for BigCo\n" +
                     " Hamlet: $650.00 (55 seats)\n" +
                     " As You Like It: $580.00 (35 seats)\n" +
                     " Othello: $500.00 (40 seats)\n" +
                     "Amount owed is $1,730.00\n" +
                    "You earned 47 credits\n"

    const result = statement(invoice, plays)

    expect(result).toBe(expected_result);
});

test('statement throws error when unknown play occur', () => {
    let plays = {
        "hamlet": { "name": "Hamlet", "type": "action" },
    }
    function executeStatement()
    {
        statement(invoice, plays)
    }
    expect(executeStatement).toThrow(new Error('unknown type: action'));
  });