export type ExtraLoggingData = Record<string, any>;

export abstract class Logger {

  public abstract log(message: string): string | void;
  public abstract log(message: string, extra?: ExtraLoggingData): string | void;

  public abstract info(message: string): string | void;
  public abstract info(message: string, extra?: ExtraLoggingData): string | void;

  public abstract warn(message: string): string | void;
  public abstract warn(message: string, extra?: ExtraLoggingData): string | void;

  public abstract error(message: string): string | void;
  public abstract error(message: string, extra?: ExtraLoggingData): string | void;

  public abstract exception(error: any): string | void;
  public abstract exception(error: any, extra?: ExtraLoggingData): string | void;
}
