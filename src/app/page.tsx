// `app/page.tsx` is the UI for the `/` URL
'use client';
import SecondSection from './_secondSection';
import FirstSection from './_firstSection';

export default function Page() {
  return (
    <>
      <FirstSection />
      <SecondSection />
    </>
  );
}
