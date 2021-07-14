import React from 'react'
import { Navbar } from './component/Navbar/Navbar'
import { Main } from './component/Main/Main'
import { Header } from '../src/component/Header/Header'
import { TSplateform } from '../src/component/TSplateform/TSplateform'
import { Services } from '../src/component/Services/Services'
import { Flow } from '../src/component/Flow/Flow'
import { Layer } from '../src/component/LayerSection/Layer'
import { Plateform } from '../src/component/Plateform/Plateform'
import { Footer } from '../src/component/Footer/Footer'
function App() {
  return (
    <Main>
      <Navbar />
      <Header />
      <TSplateform />
      <Services />
      <Flow />
      <Layer />
      <Plateform />
      <Footer />
    </Main>
  );
}

export default App;
