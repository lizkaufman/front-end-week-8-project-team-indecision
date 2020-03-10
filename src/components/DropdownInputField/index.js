import React from 'react';

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
  'Rowan',
  'Spindle',
  'Whitebeam',
  'Willow',
  'Yew'
];

function DropdownInputField({ name, value, handleChange }) {
  return (
    <select name={name} value={value} onChange={handleChange}>
      {treeSpecies.map(species => (
        <option value={species}>{species}</option>
      ))}
    </select>
  );
}

export default DropdownInputField;
