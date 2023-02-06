import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            {/* Title */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <div className='search'>
                <AddCategory
                    onNewCategory={onAddCategory}
                    currentCategories={categories}
                />
            </div>

            {/* Listado de Gif */}
            {
                categories.length == 0 && <h2 className='text-center arrayVacio'>Aún no se ha buscado nada</h2>
            }

            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }
        </>
    )
}