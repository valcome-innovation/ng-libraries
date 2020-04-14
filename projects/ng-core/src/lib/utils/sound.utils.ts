export class SoundUtils {
  public static readonly FULL_VOLUME = 1;
  public static readonly MEDIUM_VOLUME = 0.5;
  public static readonly QUIET_VOLUME = 0.2;

  public static loadLoopedAudio(src: string, volume: number = this.FULL_VOLUME): HTMLAudioElement {
    return SoundUtils.createAndLoadAudio(src, volume, true);
  }

  public static createAndLoadAudio(src: string, volume: number = this.FULL_VOLUME, loop: boolean = false): HTMLAudioElement {
    const audio = this.createAudio(src, volume, loop);
    audio.load();
    return audio;
  }

  public static createAudio(src: string, volume: number = this.FULL_VOLUME, loop: boolean = false): HTMLAudioElement {
    const audio = new Audio(src);
    audio.loop = loop;
    audio.volume = volume;
    return audio;
  }
}
