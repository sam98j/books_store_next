import React from "react";
import { useSelector } from "react-redux";
import { IBook } from "../interfaces/books";
import BookItem from "./BookItem";

export default function BooksSec() {
  const store = useSelector((store) => store) as { books: IBook[] };
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {store.books.map((book) => (
              <BookItem book={book} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
