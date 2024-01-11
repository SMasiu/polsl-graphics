export const createReducer = (initialState: any, handlers: any) => {
  return (state = initialState, { type, payload }: any) => {
    const handler = handlers[type];
    return handler ? handler(state, payload) : state;
  };
};
