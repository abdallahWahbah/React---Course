// http://localhost:3000/news

import React from 'react'
import Link from 'next/link'

const NewsPage = () => {
  return (
    <React.Fragment>
        <h1>NewsPage</h1>
        <ul>
            <li>
                <Link href="/news/dynamic/open-dynamic-page-with-dynamic-url">Go to Dynamic News</Link>
            </li>
            <li>
                <Link href="/">Go to Home Page</Link>
            </li>
            <li>
                <Link href="/news/details">Go to Details Page</Link>
            </li>
        </ul>
    </React.Fragment>
  )
}

export default NewsPage