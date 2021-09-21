import React, { FC } from "react";
import { IBook } from "../interfaces/books";

const BookItem: FC<{ book: IBook }> = ({ book }) => {
  return (
    <div className="lg:w-1/5 md:w-1/2 p-4 w-full">
      <a className="block relative h-48 rounded overflow-hidden">
        <img
          alt="ecommerce"
          className="object-cover object-center w-full h-full block"
          src={book.img}
        />
      </a>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          CATEGORY
        </h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">
          {book.name}
        </h2>
        <p className="mt-1">${book.price}</p>
      </div>
    </div>
  );
};

export default BookItem;
