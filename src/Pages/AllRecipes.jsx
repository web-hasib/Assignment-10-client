import React from 'react';
import { useLoaderData } from 'react-router';
import RecipeCard from '../components/RecipeCard';

const AllRecipes = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
           <div>

           </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mx-auto p-2 md:p-4'>
                {data.map(recipe=><RecipeCard key={recipe._id} recipe={recipe}></RecipeCard>)}
            </div>
        </div>
    );
};

export default AllRecipes;