const SET_COUNTRY_DATA = 'country/SET_COUNTRY_DATA';

export const setCountryData = (data: string[][]) => ({
  type: SET_COUNTRY_DATA,
  payload: data,
});

type InitState = string[][];

const initState = [] as InitState;

type CountryAction = ReturnType<typeof setCountryData>;

export const accessReducer = (
  state: InitState = initState,
  action: CountryAction
) => {
  switch (action.type) {
    case SET_COUNTRY_DATA:
      return action.payload;
    default:
      return state;
  }
};
