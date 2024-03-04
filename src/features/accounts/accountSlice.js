const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

export default function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + Number(action.payload),
      };
    case "account/withdraw":
      return {
        ...state,
        balance: state.balance - Number(action.payload),
      };
    case "account/requestloan":
      if (state.loan > 0) return state;
      return {
        ...state,
        balance: state.balance + Number(action.payload.amount),
        loan: Number(action.payload.amount),
        loanPurpose: action.payload.purpose,
      };
    case "account/payloan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };

    default:
      return state;
  }
}

export function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}
export function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}
export function requestloan(amount, purpose) {
  return { type: "account/requestloan", payload: { amount, purpose } };
}
export function payLoan() {
  return { type: "account/payloan" };
}
