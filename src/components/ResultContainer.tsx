import { useContext } from 'react';
import { OccupationsList } from './OccupationsList';
import { ResultCardContainer } from './ResultCardContainer';
import { SearchContext } from '../contexts/SearchContext';
import { useState } from 'react';
import { IEducation } from '../models/IEducation';
import { AboutEducationView } from './AboutEducationView';
import { DigiTypographyHeadingJumbo } from '@digi/arbetsformedlingen-react';

export const ResultContainer = () => {
  const { search } = useContext(SearchContext);
  const [selectedEducation, setSelectedEducation] = useState<IEducation | null>(
    null
  );

  return (
    <>
      {search.educations === null ? (
        <DigiTypographyHeadingJumbo af-Level='h2' afText='Sökningen gav inget resultat'></DigiTypographyHeadingJumbo>
      ) : (
        <div className='result'>
          <ResultCardContainer
            selectedEducation={selectedEducation}
            setSelectedEducation={setSelectedEducation}
          />
          <div className='menu-select-container'>
            {search.showOccupation ? (
              <OccupationsList />
            ) : (
              <AboutEducationView education={selectedEducation} />
            )}
          </div>
        </div>
      )}
    </>
  );
};
