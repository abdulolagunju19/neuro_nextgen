import Head from 'next/head'

import Script from 'next/script'

export default function p5() {
  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js" />
      <Script src="sketches/sketch.js" />
    </>
  )
}

