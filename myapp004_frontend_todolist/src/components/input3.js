import { useEffect, useRef, useState } from 'react';
import { insertAction } from '../reduxs/action';

const Input = () => {
    const inputRef = useRef('');

    const [input, setInput] = useState('');

    const handleChangeText = (e) => {
        setInput(e.target.value);
    };

    const insertTodo = (e) => {
        e.preventDefault();
        insertAction(input);
        setInput('');
    };

    useEffect(() => {
        inputRef.current.focus();
    });

    return (
        <form onSubmit={insertTodo}>
        <input 
          type='text' 
          required={true} 
          value={input} 
          onChange={handleChangeText} 
          ref = {inputRef}
        />
        <input type='submit' value='Create' />
      </form>
    );
};

export default Input;