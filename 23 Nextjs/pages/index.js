// http://localhost:3000

import Head from 'next/head'
import React from 'react'

const HomePage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Practise website</title>
        <meta
          name="description"
          content="welcome to the best bla bla bla bla"
        />
      </Head>
      <div>HomePage</div>
    </React.Fragment>
  )
}

export default HomePage