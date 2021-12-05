import {useEffect, useState} from 'react';

import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const AvailableMeals = () => {

  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(()=>
  {
    const fetchMeals = async() =>
    {
      const respone = await fetch('https://react-section-14-e9dc8-default-rtdb.firebaseio.com/meals.json');
      if(!respone.ok) throw new Error("Somethine went wrong!");

      const responseData = await respone.json();
      let loadedMeals=[];

      // firebase returns nested objects (with ids: m1, m2, m3...) not array, so we transform them in an array of objects
      for(const key in responseData)
      {
        loadedMeals.push(
          {
            id: key, 
            name: responseData[key].name, 
            description: responseData[key].description, 
            price: responseData[key].price
          })
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    }
    
    fetchMeals().catch(error=>
    {
      setIsLoading(false);
      setError(error.message);
    })
  }, [])

  if(isLoading)
  {
    return(
      <section className={classes['meals__loading']}>
        <p>Loading...</p>
      </section>
    )
  }
  if(error)
  {
    return(
      <section className={classes['meals__error']}>
        <p>{error}</p>
      </section>
    )
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
