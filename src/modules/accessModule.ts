const SET_ACCESS_DATA = 'access/SET_ACCESS_DATA';

export const setAccessData = (data: string[][]) => ({
  type: SET_ACCESS_DATA,
  payload: data,
});

type InitState = string[][];

const initState = [] as InitState;

type AccessAction = ReturnType<typeof setAccessData>;

export const accessReducer = (
  state: InitState = initState,
  action: AccessAction
) => {
  switch (action.type) {
    case SET_ACCESS_DATA:
      return action.payload;
    default:
      return state;
  }
};
