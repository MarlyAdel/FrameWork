import React from 'react'
import './NotFound.css'
import githubImg from '../../assets/Images/download.png'

export default function NotFound() {
  return (
    <section className="NotFound py-5">
      <div className="NotFound-content container text-center py-5">
        <h1>404</h1>
        <p>
          <strong>File not found</strong>
        </p>
        <p>
          The site configured at this address does not contain the requested
          file.
        </p>
        <p>
          If this is your site, make sure that the filename case matches the URL
          as well as any <br /> file permissions.
          <br />
          For root URLs (like <code>http://example.com/</code>) you must provide
          an <code>index.html</code> file.
        </p>
        <p>
          <a className='text-decoration-none' href="https://help.github.com/pages/">
            Read the full documentation{" "}
          </a>{" "}
          for more information about using <strong>GitHub Pages.</strong>
        </p>
        <div className="links mt-4">
          <a className='text-decoration-none' href="https://githubstatus.com"> GitHub Status </a> —
          <a className='text-decoration-none' href="https://twitter.com/githubstatus"> @githubstatus</a>
          <a>
            <br />
            <img src={githubImg} alt="githubLogo" className='mt-4'/>
          </a>
        </div>
      </div>
    </section>
  );
}
