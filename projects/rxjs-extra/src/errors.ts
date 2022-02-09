export class UndefinedValueError extends Error {

  public static readonly DEFAULT_MESSAGE = 'ThrowOnUndefined: undefined value encountered.'

  public constructor(message: string = UndefinedValueError.DEFAULT_MESSAGE) {
    super(message);
  }
}
