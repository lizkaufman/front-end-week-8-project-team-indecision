import React from 'react';

//TODO: stretch - can add freetype for other

const treeSpecies = [
  'Alder',
  'Apple',
  'Ash',
  'Aspen',
  'Beech',
  'Birch',
  'Blackthorn',
  'Box',
  'Buckthorn',
  'Cherry',
  'Dogwood',
  'Elder',
  'Elm',
  'Hawthorn',
  'Hazel',
  'Holly',
  'Hornbeam',
  'Juniper',
  'Oak',
  'Rowan',
  'Lime',
  'Maple',
  'Pear',
  'Pine',
  'Poplar',
  'Spindle',
  'Whitebeam',
  'Willow',
  'Yew',
  'Other'
];

function DropdownInputField({ name, value, handleChange }) {
  return (
    <select name={name} value={value} onChange={handleChange}>
      {treeSpecies.map(species => (
        <option value={species} key={species}>
          {species}
        </option>
      ))}
    </select>
  );
}

export default DropdownInputField;
