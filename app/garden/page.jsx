
import dynamic from 'next/dynamic';
const GardenGrid = dynamic(() => import('../components/garden'), {
  ssr: false,
});
import Image from "next/image";


export default function Home() {
  
  
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
           <GardenGrid auth={process.env.REACT_APP_PAT}/>
           <div className="about-link"><a className="medium-text" href="/about">about the garden</a></div>
           <div className="right-link">    <a href="/flower" className='medium-text-link'>plant a flower</a></div>

    </div>
  );
}
