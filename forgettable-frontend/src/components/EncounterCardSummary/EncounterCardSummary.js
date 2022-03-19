import React from 'react';
import {Avatar} from '@mui/material';
import classes from './EncounterCardSummary.module.css';
import {getLongDateStringWithSlashes} from '../../functions/dateFormatter';
import UnknownDetail from '../UnknownDetail/UnknownDetail';
import PropTypes from 'prop-types';

const EncounterCardSummary = (props) => {
  return (
    <div className={classes.EncounterCardSummary} onClick={props.onClick}>
      <div className={classes.ContentContainer}>
        <div className={classes.HeaderContainer}>
          <Avatar
            alt={props.firstName}
            src={props.img}
            sx={{
              height: '70px',
              width: '70px',
              marginRight: '14px',
              backgroundColor:
                  getComputedStyle(document.body).getPropertyValue('--prmry'),
              fontSize:
                  getComputedStyle(document.body)
                      .getPropertyValue('--text-xxlarge'),
            }}
          />
          <div className={classes.IdentityInfoConatiner}>
            <h3>{props.firstName}</h3>
            <p >Met at: {props.location || 'some cool place'}</p>
          </div>
        </div>
        <div className={classes.DetailsContainer}>
          <p>
            {'Date you met: '}
            {props.dateMet ?
           getLongDateStringWithSlashes(props.dateMet) :
           <UnknownDetail/>}
          </p>
          <p className={classes.DescriptionText}>
            {/* {props.description} */}
            Suspendisse scelerisque sit ultricies euismod proin ullamcorper proin don Eu duis nulla venenatis nisl aliquam. Id maecenas quam imperdiet maece
          </p>
        </div>
      </div>
    </div>
  );
};

EncounterCardSummary.propTypes = {
  id: PropTypes.string,
  firstName: PropTypes.string.isRequired,
  img: PropTypes.string,
  dateMet: PropTypes.instanceOf(Date),
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  location: PropTypes.string,
};

export default EncounterCardSummary;
