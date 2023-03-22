export function snycTap<T extends any>(arg: T, callback: (arg: T) => any): T {
  callback(arg);

  return arg;
}

export async function asnycTap<T extends any>(arg: T, callback: (arg: T) => Promise<any>): Promise<T> {
  await callback(arg);

  return arg;
}
