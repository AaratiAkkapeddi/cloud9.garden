"use client";
import React, { Component, useState } from 'react';
import Image from "next/image";


export default function Plant({id, fields}) {
  const [open, setOpen] = useState(false);
  
  return (
    <div onClick={() => {setOpen(!open)}} className="plant">
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
      {open &&
              <div className="plant-modal">
                <div className="inner">
                {fields?.Dedication &&
                  <h2 className='large-text'>{fields?.Dedication}</h2>
                }
                {fields?.DedicationPlace &&
                  <h2 className='large-text'><em>{fields?.DedicationPlace}</em></h2>
                }
                {fields?.DedicationThing &&
                  <h2 className='large-text'><em>{fields?.DedicationThing}</em></h2>
                }
                {(fields?.OptionalPhoto?.length > 0) &&
                  <img alt="a photograph of the dedicatee" src={fields.OptionalPhoto[0].url} />
                }
                {fields?.OptionalLocation &&
                  <p className="small-text"><em>{fields?.OptionalLocation}</em></p>
                }
                {fields?.OptionalNote &&
                  <p className="medium-text">{fields?.OptionalNote}</p>
                }
                 {fields?.OptionalLink &&
                  <a target="_blank" href={fields?.OptionalLink} className="medium-text">{fields?.OptionalLink}</a>
                }
                 {fields?.OptionalVideoLink &&
                  <a target="_blank" href={fields?.OptionalVideoLink} className="medium-text">{fields?.OptionalVideoLink}</a>
                }
                </div>
              </div>
      }
    </div>
  );
}
