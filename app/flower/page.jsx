import dynamic from 'next/dynamic';
const PlantFlower = dynamic(() => import('../components/share'), {
  ssr: false,
});

export default function Flower() {

  return (
    <PlantFlower cloudinaryKey={process.env.REACT_APP_CLOUDINARY_KEY} auth={process.env.REACT_APP_PAT} secret={process.env.REACT_APP_CLOUDINARY_SECRET} />
  );
}
