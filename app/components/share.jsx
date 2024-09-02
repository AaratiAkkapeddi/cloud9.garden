"use client";
import sketch from "../generator/sketch";
import { NextReactP5Wrapper } from "@p5-wrapper/next";
import { CldUploadWidget } from "next-cloudinary";
import React, { useState } from "react";

export default function PlantFlower(secret, cloudinaryKey) {
  const [uploadImage, setUploadImage] = useState(null);
  const [uploadPlant, setUploadPlant] = useState(null);
  const [uploadDedication, setUploadDedication] = useState("");
  const [uploadDedicationPlace, setUploadDedicationPlace] = useState("");
  const [uploadDedicationThing, setUploadDedicationThing] = useState("");
  const [uploadNote, setUploadNote] = useState("");
  const [uploadLink, setUploadLink] = useState("");
  const [uploadLocation, setUploadLocation] = useState("");



  const svgSubmission = () => {
    let svg = document.querySelector("#defaultCanvas0").getAttribute("data-uri");
    setUploadPlant(svg)
    const fd = new FormData();
    fd.append('upload_preset', "rose_memorial");
    fd.append('file', svg);
    fd.append('api_key', cloudinaryKey);
    fd.append('api_secret', secret);
    fd.append("multiple", "false");

    fetch('https://api.cloudinary.com/v1_1/rose-memorial/upload',{
        method: 'POST',
        body: fd,

      }).then(response => response.json())
      .then(data => {
            setUploadPlant(data?.secure_url);
        })
        .catch(error => console.error(error));
      
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="intro-text medium-text">
        <NextReactP5Wrapper sketch={sketch} />
        <label>
          <span className="medium-text formlabel">
            Dedicated in memory of <sup>*</sup>
          </span>
          <br />
          <i className="small-text">(choose one)</i>
          <br />
          <input
            className="medium-text"
            type="text"
            placeholder="a person"
            onChange={(e) => { setUploadDedication(e.target.value)}}
          />{" "}
          <br />
          <input
            className="medium-text"
            type="text"
            placeholder="or, a place"
            onChange={(e) => { setUploadDedicationPlace(e.target.value)}}
          />{" "}
          <br />
          <input
            className="medium-text"
            type="text"
            placeholder="or, a thing"
            onChange={(e) => { setUploadDedicationThing(e.target.value)}}
          />
        </label>

        <label>
          <div>
            {uploadImage && <img id="photo-image-preview" src={uploadImage} />}
          </div>
          <br></br>

          <CldUploadWidget
            config={{
              cloud: {
                cloudName: "rose-memorial",
                apiKey: cloudinaryKey,
                apiSecret: secret,
                uploadPreset: "rose_memorial",
              },
            }}
            onError={(error) => {
              console.log(error);
            }}
            onSuccess={(results) => {
              setUploadImage(results.info?.secure_url);
            }}
            uploadPreset="rose_memorial"
          >
            {({ open }) => {
              return (
                <button
                  className="cloudinary medium-text"
                  onClick={() => open()}
                >
                  {uploadImage
                    ? "Change photo"
                    : "Optionally, add a photograph"}
                </button>
              );
            }}
          </CldUploadWidget>
        </label>
        <br></br>
        <br></br>
        {uploadImage && (
          <>
            <button
              className="cloudinary medium-text"
              onClick={() => {
                setUploadImage(null);
              }}
            >
              Remove photo
            </button>
            <br></br>
            <br></br>
          </>
        )}

        <label>
          <span className="medium-text formlabel">
            Add a reflection<sup>*</sup>
          </span>
          <textarea
            onChange={(e) => { setUploadNote(e.target.value)}}
            className="medium-text"
            placeholder="How do you want to hold space for yourself and close ones in remembering?
            What are you senses that come back to you in remembering? What do you smell? Taste? Hear? See? Feel?
            What is a memory of joy or celebration you have together?
            What do you want to invoke for the future in their honor?
            How does their presence continue? "
          />
        </label>
        <label>
          <span className="medium-text formlabel">Add a location</span>
          <br />
          <input
            className="medium-text"
            type="text"
            placeholder="e.g. Brooklyn, NY"
            onChange={(e) => { setUploadLocation(e.target.value)}}

          />
        </label>
        <br></br>
        <label>
          <span className="medium-text formlabel">Add an external link</span>
          <br />
          <input
            className="medium-text"
            type="text"
            placeholder="e.g. GoFundMe link"
            onChange={(e) => { setUploadLink(e.target.value)}}

          />
        </label>

        <br></br>
        <br></br>
        <button id="submit-button">
          <span onClick={()=> {svgSubmission()}} className="medium-text-link"> plant flower</span>
        </button>
      </div>
    </main>
  );
}
