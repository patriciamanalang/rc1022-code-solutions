import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel';

const carouselImages = [
  'https://i.etsystatic.com/36611622/r/il/4b18b9/4444975821/il_1588xN.4444975821_pfo2.jpg',
  'https://i.etsystatic.com/21938888/r/il/eb8fd8/4202371142/il_1588xN.4202371142_7p5f.jpg',
  'https://i.etsystatic.com/21938888/r/il/abe6f2/4310760928/il_1588xN.4310760928_7irw.jpg',
  'https://i.etsystatic.com/35407116/r/il/dad495/4494098949/il_1588xN.4494098949_h8si.jpg',
  'https://i.etsystatic.com/26028751/r/il/81a4fc/4215303686/il_1588xN.4215303686_2xia.jpg'

];

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<Carousel images={carouselImages} />);
