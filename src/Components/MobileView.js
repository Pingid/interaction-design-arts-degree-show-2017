import React from 'react';

import Header from './Header';
import MobilePerson from './MobilePerson';

const MobileView = ({ people, selected, onSelect }) => {
  return (
    <div style={{  }}>
      <h4 style={{
        width: '61.8vw',
        color: 'black',
        margin: '0 auto',
        marginTop: '7rem',
        marginBottom: '4rem',
        maxWidth: '46rem',
        fontWeight: '600' }}>
        We are Interaction Design Arts at the London Collage of Communication graduating 2017. Here you can see are work exhibited at our 360 degree show and find links to our other work.
      </h4>
      <div style={{
        display: 'flex',
        flexFlow: 'row wrap',
        boxSizing: 'content-box',
        padding: '0 1 rem',
      }}>
        {
          people.map((person, index) => {
            return (
              <div style={{ flex: '33.33%' }} onClick={() => onSelect(person._id)} key={index}>
                <img style={{ width: '100%' }} src={require(`../resources/profile-photos/small-cropped/${person.name}.jpg`)} />
              </div>
            )
          })
        }
      </div>
      <MobilePerson
        people={people}
        selected={selected}
        onSelect={onSelect} />
    </div>
  )
}

export default MobileView;
