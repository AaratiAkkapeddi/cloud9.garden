import React, { Component } from 'react';
import Image from "next/image";


export default function Plant({id, fields}) {

  
  return (
    <div className="plant">
        {(fields?.RoseSVG?.length > 0) &&
          <img alt="a unique white flower" src={fields.RoseSVG[0].url} />
        }
        {fields?.Dedication &&
        <p className='tiny-text'>{fields?.Dedication}</p>
        }
        {fields?.DedicationPlace &&
         <p className='tiny-text'><em>{fields?.DedicationPlace}</em></p>
        }
        {fields?.DedicationThing &&
         <p className='tiny-text'><em>{fields?.DedicationThing}</em></p>
        }
        {fields?.OptionalLocation &&
         <p className='tiny-text'><em>{fields?.OptionalLocation}</em></p>
        }

      

    </div>
  );
}
