import React, {Component} from 'react';
import CountryData from '../data/data.json';


class CountryList extends Component{
  
render(){
  return (
    <div >
      <h1>Countries</h1>
      <select>
      {CountryData.map((country, index)=>{
      	return <option value={country.code}>{country.name}</option>
      })}
      </select>
    </div>
  )
}
}
export default CountryList;