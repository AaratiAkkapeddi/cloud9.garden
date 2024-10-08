import Image from "next/image";

export default function Home() {
  return (
    <>
    <div id='bg'></div>
    <main className="flex min-h-screen flex-col items-center justify-between">
<div className="about-info-container">
        <div className="about-info">
          <h1 className='large-text'>about this garden</h1>
          <div className="medium-text">
          <br></br>
            <p>
              The CLOUD9 Memorial Garden is a space for collective remembrance with care, gentleness and respect. Pandemic times limit how we can gather to mourn and remember. During periods of mass loss and isolation, creating intentional spaces to enact and celebrate collective memory is vital. Our community continues to plant new seeds for all of ours that we have lost in this time, due to state violence, due to Covid and due to the continued systems centered on harming Black people, Indigenous people, brown people, low income people, trans people, undocumented people, and marginalized people. We invite you to transform personal grief into collective healing, growth and liberation.
            </p>
            <br></br>
            <p>
              ❃ ❊ ❋ ✣ ✤
            </p>
            <br></br>
            <p>
               The CLOUD9 Memorial Garden is a continuation and extension of <a href="https://cloud9.support/">CLOUD9 (Collective Love on Ur Desktop)</a>, a platform for sharing care, strategies, wisdom, sweetness, resources, and love to support everyone affected by the coronavirus pandemic. This garden was built by and is tended to by <a href="http://aarati.online/">Aarati Akkapeddi</a>, <a href="https://zai.zone/">Zainab Aliyu</a>, <a href="https://www.melaniehoff.com/">Melanie Hoff</a> and <a href="https://cofuente.io">Chiara Marcial Martínez</a> in collaboration with <a href="http://www.bufubyusforus.com/">BUFU (By Us For Us)</a>.
            </p>
            <br></br>
            <p>
              ✽ ✾ ✿ ❀ ❁
            </p>
            <br></br>
            <p>
              Flowers made with <a href="https://p5js.org/">p5.js</a>. Each flower is unique to its dedication.
            </p>
          </div>
          <br></br>
        </div>
        <nav id='flower-nav' className='medium-text-link'>
         <a href="/garden" className='medium-text-link'>↩ back to the garden</a>
        </nav>
      </div>           
    </main>
    </>
  );
}
