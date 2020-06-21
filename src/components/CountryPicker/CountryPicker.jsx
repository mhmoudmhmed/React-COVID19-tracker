import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { countries } from '../../Api';


import styles from './CountryPicker.module.css';

const CountryPicker = ({ handleCountryChange }) => {

  const [fetchCountries, setFetchCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      setFetchCountries(await countries());
    };

    fetchCountries();
  }, [setFetchCountries]);

  return(
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
        <option value=''>Global</option>
        {
          fetchCountries.map((name, index) => (
            <option key={index} value={name}>{name}</option>
          ))
        }
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
