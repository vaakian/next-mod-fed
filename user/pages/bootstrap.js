import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Card from './card'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>user page</h1>
      <Card />
    </div>
  )
}
