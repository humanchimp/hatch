export type FlagType = "old" | "gnu" | "rest";

export interface Flag<T = any> {
  type: FlagType;
  name: string;
  value: T;
}

export type Greed = number;

export interface Convert<T> {
  (value: string): T
}

export interface Converter<T> {
  convert?: Convert<T>;
}
