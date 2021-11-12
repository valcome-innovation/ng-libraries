export type FileName = { name: string, suffix: string };

export class FileUtils {

  public static getFileNameFromUrl(url: string): FileName {
    const fileName = url.split('/').pop() ?? url;

    const fileEndingIndex = fileName.lastIndexOf('.');

    return {
      name: fileName.substring(0, fileEndingIndex),
      suffix: fileName.substring(fileEndingIndex + 1)
    };
  }
}
