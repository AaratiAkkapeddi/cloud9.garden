"use client";
import sketch from "../generator/sketch";
import { NextReactP5Wrapper } from "@p5-wrapper/next";
import { CldUploadWidget } from "next-cloudinary";
import React, { useState } from "react";

export default function PlantFlower(secret, cloudinaryKey) {
  const [uploadImage, setUploadImage] = useState(null);

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
          />{" "}
          <br />
          <input
            className="medium-text"
            type="text"
            placeholder="or, a place"
          />{" "}
          <br />
          <input
            className="medium-text"
            type="text"
            placeholder="or, a thing"
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
          />
        </label>

        <br></br>
        <br></br>
        <button id="submit-button">
          <span className="medium-text-link"> plant flower</span>
        </button>
      </div>
    </main>
  );
}
