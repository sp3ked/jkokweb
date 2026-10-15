import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import onTheEdge from "../images/Books/on-the-edge.jpg";
import readWriteOwn from "../images/Books/read-write-own.jpg";
import permutationCity from "../images/Books/permutation-city.jpg";
import geniusMakers from "../images/Books/genius-makers.jpg";
import reasonsAndPersons from "../images/Books/reasons-and-persons.jpg";
import mindDesignIII from "../images/Books/mind-design-iii.jpg";
import artOfWar from "../images/Books/art-of-war.jpg";
import singularityIsNear from "../images/Books/singularity-is-near.jpg";
import singularityIsNearer from "../images/Books/singularity-is-nearer.jpg";
import accidentalEmpires from "../images/Books/accidental-empires.jpg";
import "./Books.css";

const currentBooks = [
  { title: "On the Edge", author: "Nate Silver", cover: onTheEdge },
  { title: "Read Write Own", author: "Chris Dixon", cover: readWriteOwn },
];

const readBooks = [
  { title: "Permutation City", author: "Greg Egan", cover: permutationCity },
  { title: "Genius Makers", author: "Cade Metz", cover: geniusMakers },
  { title: "Reasons and Persons", author: "Derek Parfit", cover: reasonsAndPersons },
  {
    title: "Mind Design III",
    author: "John Haugeland, Carl F. Craver & Colin Klein",
    cover: mindDesignIII,
  },
  { title: "The Art of War", author: "Sun Tzu", cover: artOfWar },
  { title: "The Singularity Is Near", author: "Ray Kurzweil", cover: singularityIsNear },
  { title: "The Singularity Is Nearer", author: "Ray Kurzweil", cover: singularityIsNearer },
  { title: "Accidental Empires", author: "Robert X. Cringely", cover: accidentalEmpires },
];

function Book({ book, current = false }) {
  return (
    <article className={`books-card${current ? " books-card-current" : ""}`}>
      <div className="books-cover-wrap">
        <img
          src={book.cover}
          alt={`${book.title} book cover`}
          className="books-cover"
          loading={current ? "eager" : "lazy"}
        />
      </div>
      <h3>{book.title}</h3>
      <p>{book.author}</p>
    </article>
  );
}

function Books() {
  return (
    <div className="books-page">
      <Helmet>
        <title>Books — Joey Kokinda</title>
        <meta
          name="description"
          content="Books Joey Kokinda is currently reading and has read."
        />
      </Helmet>

      <Link to="/" className="back-btn">← Home</Link>

      <main className="books-main glass">
        <header className="books-header">
          <h1>Books</h1>
        </header>

        <section className="books-section" aria-labelledby="currently-reading">
          <div className="books-section-heading">
            <h2 id="currently-reading">Currently reading</h2>
          </div>
          <div className="books-grid books-grid-current">
            {currentBooks.map((book) => <Book key={book.title} book={book} current />)}
          </div>
        </section>

        <section className="books-section" aria-labelledby="books-read">
          <div className="books-section-heading">
            <h2 id="books-read">Books I&rsquo;ve read</h2>
          </div>
          <div className="books-grid">
            {readBooks.map((book) => <Book key={book.title} book={book} />)}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Books;
