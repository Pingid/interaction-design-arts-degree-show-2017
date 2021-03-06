import React from 'react';
import { uniqueId } from 'lodash';

import Project from './Project';

const Person = ({ people, selected, onSelect }) => {
  const currentPerson = people.filter(x => x._id === selected)[0];
  return (
    <div style={{

    }}>
      <div className="person-info">
        <h2 style={{ margin: 0, paddingBottom: '5px' }}>{currentPerson.profile.name}</h2>
        <h4 style={{ margin: 0 }}>{currentPerson.profile.title}</h4>
        <h5 style={{ margin: 0, marginTop: '5px' }} className="clickable"><a href={currentPerson.profile.website}>{currentPerson.profile.website}</a></h5>
      </div>
      <div style={{ width: '100%', height: '50vh', boxSizing: 'border-box', padding: '0 2rem', display: 'flex', justifyContent: 'center' }}>
        <div style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-around',
        }}>
          {
            currentPerson.work.map((piece, i) => {
              const collaboratorElems = () => {
                if (piece.collaborators) {
                  const collaborators = piece.collaborators.map(x => people.find(y => y.name === x));
                  return collaborators.map(x => (
                    <span
                      key={uniqueId()}
                      className="clickable"
                      style={{ margin: 0, paddingLeft: '5px'}}
                      onClick={() => onSelect(x._id)}>{x.profile.name}</span>
                  ))
                }
                return null
              }
              return <Project
                        key={uniqueId()}
                        person={currentPerson}
                        collaboratorElems={collaboratorElems}
                        i={i}
                        {...piece} />;
            })
          }
          {
            // currentPerson.work.map((piece, i) => {
            //   const image = () => {
            //     if (piece.photos) return require(`../resources/work/small/${piece.photos[0]}.jpg`);
            //     return require(`../resources/drawings/${currentPerson.name}-${i + 1}.jpg`);
            //   }
            //   const collaborators = () => {
            //     if (piece.collaborators) {
            //       const collaborators = piece.collaborators.map(x => people.find(y => y.name === x));
            //       return (
            //         <h5 style={{ display: 'flex' }}>
            //           In collaboation with: {
            //             collaborators.map(x => (
            //               <h5 key={uniqueId()} style={{ margin: 0, paddingLeft: '5px'}} className="clickable" onClick={() => onSelect(x._id)}>{x.profile.name}</h5>
            //             ))
            //           }
            //         </h5>
            //       )
            //     }
            //     return null
            //   }
            //   if (window.innerWidth < 1000 && currentPerson.work.length > 1) {
            //     return (
            //       <div  key={uniqueId()} style={{ display: 'flex', flexFlow: 'column', margin: '0 3rem' }}>
            //         <h4 className="orange" style={{ marginTop: 0 }}>{piece.name}</h4>
            //         <img alt="piece" style={{ width: '100%' }} src={image()} />
            //         <h5 style={{  }}>{piece.description}</h5>
            //         { collaborators() }
            //       </div>
            //     )
            //   }
            //   return [
            //     <div  key={uniqueId()} style={{
            //       backgroundImage: `url(${image()})`,
            //       backgroundSize: 'contain',
            //       backgroundRepeat: 'no-repeat',
            //       backgroundPosition: 'right',
            //       width: '100%',
            //       maxWidth: '40rem',
            //       minWidth: '10rem' }}></div>,
            //     <div  key={uniqueId()} style={{ margin: '0 2rem', maxWidth: '17rem', minWidth: '10rem' }}>
            //       <h4 className="orange" style={{ marginTop: 0 }}>{piece.name}</h4>
            //       <h5 style={{  }}>{piece.description}</h5>
            //       { collaborators() }
            //     </div>
            //   ];
            // })
          }
        </div>
      </div>
    </div>
  )
}

export default Person;
