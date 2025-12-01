'use client'
import { Category } from "@/types/note";
import Link from "next/link";
import { useState } from "react";
import css from "./CategoriesMenu.module.css";

type Props = {
    categories: Category[];
};

const CategoriesMenu = ({ categories }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

  return (
      <div className={css.menuContainer}>
          <button className={css.menuBtn} onClick={toggle}>Notes</button> 
          {isOpen && (
              <ul className={css.menu}>
                  <li className={css.menuItem}>
                      <Link href={`/notes/filter/all`} onClick={toggle}>All notes</Link>
                  </li>
                  {
                      categories.map((category) => (
                          <li key={category.id} className={css.menuItem}>
                              <Link href={`/notes/filter/${category.id}`} onClick={toggle}>
                                  {category.name }</Link>
                          </li>
                      ))
                  }
              </ul>
          )}
    </div>
  )
}

export default CategoriesMenu;
