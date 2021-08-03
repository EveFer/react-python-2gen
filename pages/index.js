import Head from 'next/head'
import Link from 'next/link'

export default function Home() {

  const blogSlug = 'my-post-charly'


  return (
    <>
      <button className="btn btn-primary">Enviar</button>
      {2+2}
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Link href="/nosotros">
              <a>Nosotros</a>
            </Link> <br/>
            <Link href={`/blog/${blogSlug}`}>
              <a>Algun post</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
