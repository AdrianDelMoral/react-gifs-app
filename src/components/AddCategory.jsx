import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();

        const inputValueCleaned = inputValue.trim();

        // Si solo tiene 1 o ningún valor, no dejará añadir
        if (inputValueCleaned.length <= 1) return;

        // setCategories(categories => [inputValue, ...categories]);
        onNewCategory(inputValueCleaned);

        // Vaciar input una vez añadido
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}