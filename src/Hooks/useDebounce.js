import { useEffect, useState } from 'react';

function useDebounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value);
    console.log('re-render 2');
    useEffect(() => {
        const handle = setTimeout(() => {
            setDebounceValue(value);
        }, delay);
        return () => clearTimeout(handle);
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return debounceValue;
}

export default useDebounce;
