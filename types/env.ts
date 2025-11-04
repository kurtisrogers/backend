/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Env {
  (key: string, defaultValue?: string): string;
  int(key: string, defaultValue?: number): number;
  float(key: string, defaultValue?: number): number;
  bool(key: string, defaultValue?: boolean): boolean;
  json(key: string, defaultValue?: any): any;
  array(key: string, defaultValue?: any[]): any[];
  date(key: string, defaultValue?: Date): Date;
}
