export interface ApiResp<T = any> {
  message: string | null;
  data: RespData<T>;
}

export interface RespData<T = any> {
  data: T[];
  metadata: {
    count: number;
  };
}
