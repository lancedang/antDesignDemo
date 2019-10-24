export const dva = {
  config: {
    onError(err: ErrorEvent) {
      err.preventDefault();
      console.error(err.message);
    },
    initialState: {
      products: [
        { 'name': 'zhangsan', id: 1 },
        { 'name': 'lisi', id: 2 },
      ],
    },
  },
};
