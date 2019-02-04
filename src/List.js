import React from 'react';
import Card from './Card';

function List (props) {

  const CardList = props.cards.map((card) => {

    return (
      <Card title={card.title} content={card.content} key={card.key} />
    );
  });

  return (
    <section className="List">
      <header>{props.header}</header>
      <div className="List-cards">{CardList}</div>
    </section>
  );
}

export default List;
