/* eslint-disable import/no-unresolved */
import 'babel-polyfill';
import { expect } from 'chai';
import chunkArray from './index';

describe('Chunk Array', () => {
  it('with depth not a number', () => {
    const actual = () => chunkArray([], 'fsfsfff');

    expect(actual).to.throw('Depth have to be a number');
  });

  describe('with Empty array', () => {
    it('and depth 0', () => {
      const actual = () => chunkArray([], 0);

      expect(actual).to.throw('Depth cannot be superior to 0');
    });

    it('and depth -10', () => {
      const actual = () => chunkArray([], -10);

      expect(actual).to.throw('Depth cannot be superior to 0');
    });

    it('and depth 10', () => {
      const actual = chunkArray([], 10);

      expect(JSON.stringify(actual)).to.be.equal(JSON.stringify([]));
    });

    it('and depth 3', () => {
      const actual = chunkArray([], 3);

      expect(JSON.stringify(actual)).to.be.equal(JSON.stringify([]));
    });
  });

  describe('with small array', () => {
    it('and depth inferior to 0', () => {
      const actual = () => chunkArray([1,2,3], -3);

      expect(actual).to.throw('Depth cannot be superior to 0');
    });

    it('and dept equals 0', () => {
      const actual = () => chunkArray([1,2,3], 0);

      expect(actual).to.throw('Depth cannot be superior to 0');
    });

    it('depth equals 1', () => {
      const actual = chunkArray([1,2,3], 1);

      expect(actual).to.have.lengthOf(3);
      expect(JSON.stringify(actual)).to.be.equal(JSON.stringify([[1],[2],[3]]));
    });

    it('depth equals 2', () => {
      const actual = chunkArray([1,2,3], 2);

      expect(actual).to.have.lengthOf(2);
      expect(JSON.stringify(actual)).to.be.equal(JSON.stringify([[1,2],[3]]));
    });

    it('depth equals array length', () => {
      const actual = chunkArray([1,2,3], 3);

      expect(actual).to.have.lengthOf(1);
      expect(JSON.stringify(actual)).to.be.equal(JSON.stringify([[1,2,3]]));
    });

    it('depth larger than array length', () => {
      const actual = chunkArray([1,2,3], 10);

      expect(actual).to.have.lengthOf(1);
      expect(JSON.stringify(actual)).to.be.equal(JSON.stringify([[1,2,3]]));
    });
  });

  describe('with long array', () => {
    it('depth smaller than length', () => {
      const actual = chunkArray([1,2,3,4,5,6,7,8,9], 3);

      expect(actual).to.have.lengthOf(3);
      expect(JSON.stringify(actual)).to.be.equal(JSON.stringify([[1,2,3], [4,5,6], [7,8,9]]));
    });

    it('depth equals length', () => {
      const actual = chunkArray([1,2,3,4,5,6,7,8,9], 9);

      expect(actual).to.have.lengthOf(1);
      expect(JSON.stringify(actual)).to.be.equal(JSON.stringify([[1,2,3,4,5,6,7,8,9]]));
    });

    it('depth larger than length', () => {
      const actual = chunkArray([1,2,3,4,5,6,7,8,9], 100);

      expect(actual).to.have.lengthOf(1);
      expect(JSON.stringify(actual)).to.be.equal(JSON.stringify([[1,2,3,4,5,6,7,8,9]]));
    });
  });
});
