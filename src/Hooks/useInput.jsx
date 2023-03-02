import { useState } from 'react';

const useInput = (init) => {
    // state
    const [value, setValue] = useState(init);
    // Hanlder
    const Handler = (e) => {
        setValue(e.target.value);
    };

    return [value, Handler, setValue];
};
export default useInput;
