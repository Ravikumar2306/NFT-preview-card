import { useState } from 'react'
import './App.css'

function App() {

  const [focus, setFocus] = useState(false);

  return (
   <main>
      <div className="card">
        <div className="card-image">
          <img onClick={()=> setFocus(true)} className="ethereum-img" src="/NFT-preview-card/images/image-equilibrium.jpg" alt="" />
          <div className={focus? "focus-bg" : "blue-bg"}></div>
          <img className={focus? "focus-eye" : "eye-icon"} src="/NFT-preview-card/images/icon-view.svg" alt="" />
        </div>

        <article>
          <a href='#'>Equilibrium #3429</a>
          <p>Our Equilibrium collection promotes balance and calm.</p>
        </article>

        <div className="details">
          <p className="value">
            <img className="value-img" src="/NFT-preview-card/images/icon-ethereum.svg" alt="" />
            0.041 ETH
          </p>
          <p className="days">
            <img className="clock-icon" src="/NFT-preview-card/images/icon-clock.svg" alt="" />
            3 days left
          </p>
        </div>

        <hr />

        <footer>
          <figure>
            <img src="/images/image-avatar.png" alt="" />
            <figcaption><span>Creation of </span><a href="#">Jules Wyvern</a></figcaption>
          </figure>
        </footer>
      </div>
    </main>
  );
};

export default App
