import { PickedFile } from './picked-file';

describe('PickedFile', () => {
  it('should init picked file', () => {
    const file = new PickedFile(new Date(), 'Filename', 1024, 'txt', 'dataURL', null);
    expect(file).toBeDefined();
    expect(file.lastModifiedDate).toBeDefined();
    expect(file.size).toEqual(1024);
    expect(file.type).toEqual('txt');
    expect(file.dataURL).toEqual('dataURL');
    expect(file.fileReference).toBeNull();
  });
});
