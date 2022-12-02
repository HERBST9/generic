import React, {useEffect, useState} from 'react';
import {OutlinedInput, 
  InputLabel, 
  MenuItem, 
  FormControl, 
  ListItemText,
  Select,
  Checkbox,
} from '@material-ui/core';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 400,
    },
  },
};




export function SelectMultiple({ filterType, filterOptions, filters, applyFilters, setFilters, group }) {  
  const activeFilters = filters.map((filter, i) => filter);
  const [checked, setChecked] = useState() 

  const handleChange = (e) => {}

  useEffect(() => { 
    checked && filters.push(checked)

   
      setFilters([...filters, checked])
      applyFilters(filterType,checked)
      console.log('group', group)
  
      
      
    
    
  
  }, [checked]) 

  // console.log('Active Filters',activeFilters)






  return (
    <div style={{margin: '20px 20px 20px 0'}}>
      <FormControl fullWidth>
        <InputLabel style={{paddingLeft: 10}}>{ filterType }</InputLabel>
        <Select
          multiple
          onClose={applyFilters}
          value={filters.map((item, i) => item)}
          input={<OutlinedInput label={ filterType } />}
          renderValue={(selected) => selected}
          MenuProps={MenuProps}
          onChange={(e)=> handleChange(e)}
          
        >
          {filterOptions.map((type) => (
            <MenuItem key={type} value={type}>
              <Checkbox checked={activeFilters.indexOf(type) > -1} onChange={(e) => setChecked(type)} />
              <ListItemText primary={type} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}