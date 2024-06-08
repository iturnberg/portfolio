import React from 'react';
import maggie1 from '../assets/maggie1.jpg';
import vivian1 from '../assets/vivian1.jpg';
import './about.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function About() {
  return (
    <div>
      <h1>It's me, Ian Turnberg</h1>
      <p>
        Former technical sourcer, long time computer dweeb. I've always had a love for coding and the online space in general, and I'm excited to finally be starting my adventure as a developer. I've recently taken UCF's Fullstack Coding Bootcamp, and I'm currently looking to grow as either a front end or fullstack developer.
        <br></br><br></br>
        In my free time I enjoy playing video games (huge league of legends/destiny 2 dork), spending time with my cats, and working on projects.
      </p>
      <div className="row no-gutters">
        <div className="col-md-6 text-center no-gutters">
          <img src={maggie1} style={{ maxWidth: 250, maxHeight: 250 }} />
          <div>Maggie!</div>
        </div>
        <div className="col-md-6 text-center no-gutters">
          <img src={vivian1} style={{ maxWidth: 250, maxHeight: 250 }} />
          <div>Vivian!</div>
        </div>
      </div>
      <p className='op'>light mode is for ops</p>
    </div>
  );
}