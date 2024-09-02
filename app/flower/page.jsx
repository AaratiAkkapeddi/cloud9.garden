import dynamic from 'next/dynamic';
const PlantFlower = dynamic(() => import('../components/share'), {
  ssr: false,
});

export default function Flower() {

  return (
    <>
    <PlantFlower cloudinaryKey={process.env.CLOUDINARY_KEY} auth={process.env.NEXT_PUBLIC_PAT} secret={process.env.CLOUDINARY_SECRET} />
    
    <div className="about-link"><a className="medium-text" href="/about">about the garden</a></div>
    <div className="right-link">    <a href="/garden" className='medium-text-link'>↩ back to the garden</a></div>

    </>
  );
}
