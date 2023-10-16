export interface IResponseData<T> {
  items: T;
  count: number;
  pageIndex: number;
  pageSize: number;
  totalPages: number;
}
