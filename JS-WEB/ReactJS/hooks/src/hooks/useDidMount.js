import { useEffect } from 'react';

const useDidMount = (func) => {
    useEffect(() => {
        func()
    }, []);
};

export default useDidMount;
