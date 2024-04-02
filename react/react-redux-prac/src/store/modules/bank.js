const initialState = {
    balance: 0,
    history: [],
};

const DEPOSIT = 'bank/DEPOSIT';
const WITHDRAW = 'bank/WITHDRAW';

export function deposit(money) {
    if (money > 0) {
        return {
            type: DEPOSIT,
            payload: money,
        };
    } else {
        alert('액수를 확인해주세요.');
        return;
    }
}
export function withdraw(money) {
    if (money > 0) {
        return {
            type: WITHDRAW,
            payload: money,
        };
    } else {
        alert('액수를 확인해주세요.');
        return;
    }
}

export function bank(state = initialState, action) {
    switch (action.type) {
        case DEPOSIT:
            return {
                balance: state.balance + Number(action.payload),
                // balance: Number(state.balance) + Number(action.payload),
                history: [{ datetime: new Date().toLocaleString(), type: '입금', amount: action.payload }, ...state.history],
            };
        case WITHDRAW:
            return {
                balance: Number(state.balance) - Number(action.payload),
                history: [{ datetime: new Date().toLocaleString(), type: '출금', amount: action.payload }, ...state.history],
            };
        default:
            return state;
    }
}
