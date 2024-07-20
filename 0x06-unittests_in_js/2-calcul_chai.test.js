// 2-calcul_chai.test.js
(async () => {
  const { expect } = await import('chai');
  const calculateNumber = (await import('./2-calcul_chai')).default;

  describe('calculateNumber', function() {
    describe('SUM', function() {
      it('should return 6 when inputs are 1.4 and 4.5', function() {
        expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
      });

      it('should return 5 when inputs are 1.2 and 3.7', function() {
        expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
      });
    });

    describe('SUBTRACT', function() {
      it('should return -4 when inputs are 1.4 and 4.5', function() {
        expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
      });

      it('should return -3 when inputs are 1.2 and 4.2', function() {
        expect(calculateNumber('SUBTRACT', 1.2, 4.2)).to.equal(-3);
      });
    });

    describe('DIVIDE', function() {
      it('should return 0.2 when inputs are 1.4 and 4.5', function() {
        expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
      });

      it('should return "Error" when inputs are 1.4 and 0', function() {
        expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
      });

      it('should return 0.6666666666666666 when inputs are 1.5 and 3', function() {
        expect(calculateNumber('DIVIDE', 1.5, 3)).to.equal(0.6666666666666666);
      });
    });
  });
})();
