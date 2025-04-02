'use client';
import { useState, useEffect } from 'react';

const MealIdeas = ({ ingredient }) => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        if (!ingredient) return;

        const fetchMealIdeas = async () => {
            try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
                const data = await response.json();
                setMeals(data.meals || []);
            } catch (error) {
                console.error("Error fetching meal ideas:", error);
                setMeals([]);
            }
        };

        fetchMealIdeas();
    }, [ingredient]);

    return (
        <div className="p-4 border rounded shadow-md">
            <h2 className="text-lg font-bold mb-2">Meal Ideas for {ingredient}</h2>
            {meals.length === 0 ? (
                <p>No meal ideas found.</p>
            ) : (
                <ul>
                    {meals.map((meal) => (
                        <li key={meal.idMeal} className="flex items-center space-x-2 border p-2 rounded-md mb-2">
                            <img src={meal.strMealThumb} alt={meal.strMeal} className="w-16 h-16 rounded" />
                            <span>{meal.strMeal}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MealIdeas;
