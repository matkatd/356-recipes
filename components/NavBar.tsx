import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/Logo.svg";
import styles from "@/app/page.module.css";

type NavBarProps = {};

export const NavBar = ({}: NavBarProps) => (
  <nav className="navBar">
    <Link href="/">
      <Image src={Logo} alt="Reciped Logo" />
    </Link>
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/recipes">Recipes</Link>
      </li>
      <li>
        <Link href="/saved">Saved</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
    </ul>
  </nav>
);
