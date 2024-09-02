"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

import dynamic from 'next/dynamic';
const Plant = dynamic(() => import('../components/plant'), {
  ssr: false,
});

export default function GardenGrid({auth}) {
  const [roseData, setRoseData] = useState([]);
  useEffect(() => {
    fetch('https://api.airtable.com/v0/appphC81blg4z9Qyf/garden', {headers: new Headers({
      'Authorization': 'Bearer '+ auth, 
    }), })
      .then(response => response.json())
      .then(data => {
        setRoseData(data.records)
      })
      .catch(error => console.error(error));
    }, []);
  
  return (
    <div className="garden-plot">

         
            {roseData.map((rose, i) => (
                    <Plant key={i} id={rose.id} fields={rose.fields}/>
                ))
            }

    </div>
  );
}
