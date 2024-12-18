export interface ApiResp<T = any> {
  message: string | null;
  data: T;
}
