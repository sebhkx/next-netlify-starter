import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my site!" />
        <p className="description">
          <html>
          <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Asia%2FSingapore&showPrint=0&title=Seb's%20Calendar&src=c2ViaC5reEBnbWFpbC5jb20&src=cDVncGRzc2F1ZnVyNmhxYzBwMmpjajFpb2tAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%230e61b9&color=%23a6000b" style="border-width:0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
          </html>
        </p>
      </main>

      <Footer />
    </div>
  )
}
