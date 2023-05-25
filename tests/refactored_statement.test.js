const { statement, htmlStatement} = require('../theatre/refactored_statement');
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

test(`testing html statement for customer ${invoice['customer']}`, () => {
    let expected_result = "<h1>Statement for BigCo</h1>\n" +
                     "<table>\n" +
                     "<tr><th>play</th><th>seats</th><th>cost</th></tr>" +
                     " <tr><td>Hamlet</td><td>55</td><td>$650.00</td></tr>\n" +
                     " <tr><td>As You Like It</td><td>35</td><td>$580.00</td></tr>\n" +
                     " <tr><td>Othello</td><td>40</td><td>$500.00</td></tr>\n" +
                     "</table>\n" +
                     "<p>Amount owed is <em>$1,730.00</em></p>\n" +
                    "<p>You earned <em>47</em> credits</p>\n"

    const result = htmlStatement(invoice, plays)

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