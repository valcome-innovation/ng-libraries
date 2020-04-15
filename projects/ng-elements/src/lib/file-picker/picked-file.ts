export class PickedFile {

    public lastModifiedDate: Date;
    public name: string;
    public size: number;
    public type: string;
    public dataURL: string | ArrayBuffer;
    public fileReference: File;

    public constructor(lastModifiedDate?: Date,
                       name?: string,
                       size?: number,
                       type?: string,
                       dataURL?: string | ArrayBuffer,
                       fileReference?: File) {
        this.lastModifiedDate = lastModifiedDate;
        this.name = name;
        this.size = size;
        this.type = type;
        this.dataURL = dataURL;
        this.fileReference = fileReference;
    }
}
