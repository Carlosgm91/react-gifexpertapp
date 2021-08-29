import React, {useState} from 'react';
//import propTypes from '.prop-types';
import { AddCategory } from './Components/AddCategory';
import GifGrid from './Components/GifGrid';

const GifExpertApp = () =>{

    //const categories = ['One Punch','Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState(['Dragon Ball']);

    return (
        <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={ setCategories }/>
        <hr />


        <ol>
            {
                categories.map( category => (
                
                        <GifGrid 
                            category= { category }
                            key= { category }
                        />
                ) )
            }
        </ol>

        </>
    )

}

export default GifExpertApp;