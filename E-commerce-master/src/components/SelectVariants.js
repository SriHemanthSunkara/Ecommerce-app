import * as React from 'react';
import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectVariants({
  categoryObj,
  setDisplayProducts,
  products,
}) {
  const [category, setCategory] = useState('all');
  const handleChange = (event) => {
    setCategory(event.target.value);
    const value = event.target.value;
    setDisplayProducts(products);
    if (value != 'all') {
      let items = products.filter((item) => {
        if (item.category == value) return item;
      });

      setDisplayProducts(items);
    }
  };

  return (
    <FormControl variant="standard" sx={{ m: 4, minWidth: 170 }}>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={category}
        onChange={handleChange}
        label="category"
        placeholder="Category"
      >
        {categoryObj.map((category) => {
          return <MenuItem value={category}>{category}</MenuItem>;
        })}
      </Select>
    </FormControl>
  );
}
