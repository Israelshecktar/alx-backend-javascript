const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('should return 4 when inputs are 1 and 3', function() {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return 5 when inputs are 1 and 3.7', function() {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should return 5 when inputs are 1.2 and 3.7', function() {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should return 6 when inputs are 1.5 and 3.7', function() {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  // Test suite for second number rounded
  describe('when the second number is rounded', function() {
    it('should return 5 when inputs are 1 and 4.4', function() {
      assert.strictEqual(calculateNumber(1, 4.4), 5);
    });

    it('should return 6 when inputs are 1 and 4.5', function() {
      assert.strictEqual(calculateNumber(1, 4.5), 6);
    });

    it('should return 6 when inputs are 1 and 4.6', function() {
      assert.strictEqual(calculateNumber(1, 4.6), 6);
    });

    it('should return 7 when inputs are 1 and 5.5', function() {
      assert.strictEqual(calculateNumber(1, 5.5), 7);
    });
  });
});
