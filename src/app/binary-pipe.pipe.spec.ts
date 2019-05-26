import { BinaryPipePipe } from './binary-pipe.pipe';

describe('BinaryPipePipe', () => {
  it('create an instance', () => {
    const pipe = new BinaryPipePipe();
    expect(pipe).toBeTruthy();
  });
  it('should convert decimal 10 to binary 1010', () => {
    const pipe = new BinaryPipePipe();
    const binary = pipe.transform(10);
    expect(binary).toBeTruthy('1010');
  });
});
