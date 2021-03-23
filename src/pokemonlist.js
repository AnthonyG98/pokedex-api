import React from 'react';

export default function PokeList({pokemon}) {
  return (
    <div>
        {
            pokemon.map(p => (
                <div key={p} style={{fontSize: "55px"}}>
                    {p}
                </div>
            ))
        }
    </div>
    
  );
}
