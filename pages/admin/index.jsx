import Head from 'next/head'
import React from 'react'
import Dashboard from '../../sections/Dashboard'
function MainPage() {
  return (
    <>
      <Head>
        <title>Appizsoft • Admin Paneli</title>
        <meta name="robots" content="noindex" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
      <Dashboard/>
      </>
    </>
  )
}

export default MainPage