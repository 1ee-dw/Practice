import { useDispatch, useSelector } from 'react-redux';
import { deposit, withdraw } from '../store/modules/bank';
import { useState } from 'react';
import History from '../components/History';

function Bank() {
    const [money, setMoney] = useState('');
    const balance = useSelector((state) => state.bank.balance);
    const dispatch = useDispatch();
    const error = useSelector((state) => state.bank.error);

    const depositMoney = () => {
        dispatch(deposit(money));
        setMoney('');
    };
    const withdrawMoney = () => {
        dispatch(withdraw(money));
        setMoney('');
    };
    return (
        <>
            <main>
                <h1>코딩온 은행</h1>
                <h2>잔액 : {balance} 원</h2>
                <div>
                    <input type="number" step={1000} value={money} onChange={(e) => setMoney(e.target.value)} />
                    {error && <div>{error}</div>}
                </div>
                <input type="button" value="입금" onClick={depositMoney} />
                <input type="button" value="출금" onClick={withdrawMoney} />
            </main>
            <History />
        </>
    );
}

export default Bank;
