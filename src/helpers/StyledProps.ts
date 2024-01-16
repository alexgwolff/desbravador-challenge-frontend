export type StyledProps<T> = {
  [K in keyof T as K extends "children" | "className" | `on${string}`
    ? K
    : `$${string & K}`]: T[K];
};
