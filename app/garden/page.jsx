
import dynamic from 'next/dynamic';
const GardenGrid = dynamic(() => import('../components/garden'), {
  ssr: false,
});
import Image from "next/image";


export default function Home() {
  
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
           <GardenGrid auth={process.env.REACT_APP_PAT}/>
    </main>
  );
}
