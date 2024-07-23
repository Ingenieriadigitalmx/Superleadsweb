import React from 'react'
import { FormattedMessage } from 'react-intl';
import Hero from '../components/Hero/Hero';

function Home() {
    return (
      <div>
        <h1><FormattedMessage id="welcome" /></h1>
        <Hero />
        {/* ... other content */}
      </div>
    );
  }

export default Home