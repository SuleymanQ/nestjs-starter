declare type TResponse<T> = Promise<
  import('@ts-rest/core').ServerInferResponses<T>
>;
