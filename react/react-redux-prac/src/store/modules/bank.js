const initialState = {
    balance: 0,
    history: [],
    error: '',
};

const DEPOSIT = 'bank/DEPOSIT';
const WITHDRAW = 'bank/WITHDRAW';
const INVALID_DEPOSIT = 'bank/INVALID_DEPOSIT';
const INVALID_WITHDRAW = 'bank/INVALID_WITHDRAW';

export function deposit(money) {
    if (money > 0) {
        return {
            type: DEPOSIT,
            payload: money,
        };
    } else {
        return {
            type: INVALID_DEPOSIT,
            error: '입금액은 0원 이상이어야 합니다. 다시 입력해주세요.',
        };
    }
}
export function withdraw(money) {
    if (money > 0) {
        return {
            type: WITHDRAW,
            payload: money,
        };
    } else {
        return {
            type: INVALID_WITHDRAW,
            error: '출금액은 0원 이상이어야 합니다. 다시 입력해주세요.',
        };
    }
}

export function bank(state = initialState, action) {
    switch (action.type) {
        case DEPOSIT:
            return {
                balance: state.balance + Number(action.payload),
                history: [{ datetime: new Date().toLocaleString(), type: '입금', amount: Number(action.payload) }, ...state.history],
            };
        case INVALID_DEPOSIT:
            return {
                ...state,
                error: action.error,
            };
        case WITHDRAW:
            return {
                balance: Number(state.balance) - Number(action.payload),
                history: [{ datetime: new Date().toLocaleString(), type: '출금', amount: Number(action.payload) }, ...state.history],
            };
        case INVALID_WITHDRAW:
            return {
                ...state,
                error: action.error,
            };
        default:
            return state;
    }
}
