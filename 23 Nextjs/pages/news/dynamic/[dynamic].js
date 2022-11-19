// http://localhost:3000/news/dynamic/""""""anything""""""

import React from 'react'
import {useRouter} from 'next/router';

const DynamicNews = () => 
{
    const router = useRouter();
    console.log(router.query.dynamic) // dynamic is the file name(that is put in square brackets)

    return (
    <div>DynamicNews</div>
    )
}

export default DynamicNews