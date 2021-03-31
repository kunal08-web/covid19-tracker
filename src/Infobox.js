import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import './InfoBox.css';
import numeral from 'numeral';

function Infobox({ title, isRed, active, recentCases, totalCases, ...props }) {
  return (
    <Card
      className={`infoBox ${
        active ? (isRed ? `infoBox--red` : `infoBox--selected`) : null
      } `}
      onClick={props.onClick}
    >
      <CardContent>
        <Typography className='infoBox__title' color='textSecondary'>
          {title}
        </Typography>
        <h2 className='infoBox__recentCases'>
          +{numeral(recentCases).format('0,0')}
        </h2>
        <Typography className='infoBox__totalCases' color='textSecondary'>
          {numeral(totalCases).format('0,0')} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Infobox;
