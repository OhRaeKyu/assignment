const SET_REFERRAL_DATA = 'referral/SET_REFERRAL_DATA';

export const setReferralData = (data: string[][]) => ({
  type: SET_REFERRAL_DATA,
  payload: data,
});

type InitState = string[][];

const initState = [] as InitState;

type ReferralAction = ReturnType<typeof setReferralData>;

export const referralReducer = (
  state: InitState = initState,
  action: ReferralAction
) => {
  switch (action.type) {
    case SET_REFERRAL_DATA:
      return action.payload;
    default:
      return state;
  }
};
