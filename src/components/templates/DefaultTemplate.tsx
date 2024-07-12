import Header from 'components/organisms/Header';
import React from 'react';

const DefaultTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
    </>
  )

};

export default DefaultTemplate;