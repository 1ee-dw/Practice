import { useDispatch, useSelector } from 'react-redux';
import { deposit, withdraw } from '../store/modules/bank';
import { useState } from 'react';
import History from '../components/History';

function Main() {
    const [money, setMoney] = useState(0);
    const balance = useSelector((state) => state.bank.balance);
    const dispatch = useDispatch();
    return (
        <>
            <main>
                <h1>코딩온 은행</h1>
                <h2>잔액 : {balance} 원</h2>
                <input type="number" step={1000} value={money} onChange={(e) => setMoney(e.target.value)} />
                <input type="button" value="입금" onClick={() => dispatch(deposit(money))} />
                <input type="button" value="출금" onClick={() => dispatch(withdraw(money))} />
            </main>
            <History />
        </>
    );
}

export default Main;
