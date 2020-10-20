import { SoundUtils } from './sound.utils';

describe('SoundUtils', () => {

  it('should create full volume audio by default', () => {
    const audio = SoundUtils.createAudio('audio path');
    expect(audio.volume).toEqual(1);
    expect(audio.loop).toBeFalse();
  });

  it('should should create and load audio', () => {
    const src: string = 'audio path';
    const audio = SoundUtils.createAudio(src);

    spyOn(audio, 'load');
    spyOn(SoundUtils, 'createAudio').and.returnValue(audio);

    const loadedAudio = SoundUtils.createAndLoadAudio(src);
    expect(loadedAudio).toBe(audio);
    expect(audio.load).toHaveBeenCalledTimes(1);
  });

  it('should create and load default audio', () => {
    const loadedAudio = SoundUtils.createAndLoadAudio('audio path');
    expect(loadedAudio.volume).toEqual(1);
    expect(loadedAudio.loop).toBeFalse();
  });

  it('should create looped audio', () => {
    const loopedAudio = SoundUtils.loadLoopedAudio('audio path');
    expect(loopedAudio.loop).toBeTrue();
  });

  it('should create looped audio with volume', () => {
    const volume = 0.5;
    const loopedAudio = SoundUtils.loadLoopedAudio('audio path', volume);
    expect(loopedAudio.loop).toBeTrue();
    expect(loopedAudio.volume).toEqual(volume);
  });
});
