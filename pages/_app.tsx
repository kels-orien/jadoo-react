import { useState, Suspense } from 'react'
import 'tailwindcss/tailwind.css'
import '../assets/base.css'
import { ManagedUIContext } from '../components/context'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { NextPage } from 'next'
const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {

  return (
        <ManagedUIContext>
        <Component {...pageProps} />
      </  ManagedUIContext> 
  
      
    )
}

export default appWithTranslation(MyApp)
