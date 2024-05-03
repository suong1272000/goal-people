// `app/page.tsx` is the UI for the `/` URL
'use client';

import FirstSection from './_components/firstSection';
import SecondSection from './_components/secondSection';

export default function Page() {
  return (
    <>
      <FirstSection />
      <SecondSection />
    </>
  );
}
