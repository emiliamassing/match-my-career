import { useContext } from 'react';
import { IOccupation } from '../models/IRelatedOccupations';
import { getEnrichedOccupations } from '../services/DataService';
import { SearchContext } from '../contexts/SearchContext';
import { ActionType } from '../reducers/SearchReducer';

import {
  DigiButton,
  DigiTypography,
  DigiTypographyHeadingJumbo,
} from '@digi/arbetsformedlingen-react';
import { TypographyHeadingJumboLevel } from '@digi/arbetsformedlingen';
import { useNavigate } from 'react-router-dom';

interface IOccupationViewProps {
  occupation: IOccupation;
}

export const OccupationView = ({ occupation }: IOccupationViewProps) => {
  const { dispatch } = useContext(SearchContext);
  const navigate = useNavigate();
  const handleClick = async (occupation: IOccupation) => {
    const response = await getEnrichedOccupations(occupation.id);

    dispatch({
      type: ActionType.ADDED_ENRICHED_OCCUPATIONS,
      payload: JSON.stringify(response),
    });

    navigate('/skillchart');
  };

  return (
    <>
      <div className='occupation-card'>
        <div className='title-container'>
          <DigiTypography>
            <DigiTypographyHeadingJumbo
              afText={occupation.occupation_label}
              afLevel={TypographyHeadingJumboLevel.H4}
            ></DigiTypographyHeadingJumbo>
          </DigiTypography>
        </div>
        <div className='button-container'>
          <DigiButton class='back' onAfOnClick={() => handleClick(occupation)}>
            Kompetenser
          </DigiButton>
        </div>
      </div>
    </>
  );
};
