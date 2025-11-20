import React from 'react';
import Card from '../card/card';

const Home = ({ courses, onAddItem, onRemoveItem }) => {
  return (
    <div>
      <h1 className="kurslar">Barcha kurslar ro'yxati </h1>

      <div className="cards__container">
        {courses.map(course => (
          <Card 
            key={course.id}
            course={course}
            onAddItem={onAddItem}
            onRemoveItem={onRemoveItem}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
