import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Don't miss these EPIC Mindblowing Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/ooty.jpg'
              text='Explore the hidden Pine Forest inside ooty'
              label='landscape'
              path='/services'
            />
            <CardItem
              src='images/Tanjore.jpg'
              text='Visit the important center of south Indian religion, art, and architecture'
              label='Luxury'
              path='/heritage'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/dhanushkodi.jpg'
              text='Hidden city inside Indian Ocean grabs history of south Indians'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/kodaikanal.jpg'
              text='Explore the hidden falls and rivers in the western ghats mountains '
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/Kanyakumari.jpg'
              text='Ride through the last edge of India contains epic Thiruvalluvar statue'
              label='Nature'
              path='/make-trip'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
