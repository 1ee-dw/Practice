import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const [inputValue, setInputValue] = useState('');
    const nav = useNavigate();
    const search = () => nav(`/?search=${inputValue}`);
    return (
        <div>
            <div>
                <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Pleaes Enter the Movie Title..." />
            </div>
            <div>
                <input type="button" value="Search" onClick={search} />
            </div>
        </div>
    );
}
