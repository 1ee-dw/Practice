import { useSelector } from 'react-redux';

function History() {
    // const [log, setLog] = useState([]);
    const history = useSelector((state) => state.bank.history);

    return (
        <footer>
            {history.map((log, idx) => (
                <p key={idx}>
                    {log.amount}원 {log.type} - {log.datetime}
                </p>
            ))}
        </footer>
    );
}

export default History;
