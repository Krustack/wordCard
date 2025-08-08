import { FaHamburger } from "react-icons/fa";
import { useState } from "react";

export default function Navbar({ groups, onGroupSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  function toggleNavbar() {
    setIsOpen((prev) => !prev);
  }
  function handleGroupSelect(group) {
    onGroupSelect(group);
    setIsOpen(false); // Close the navbar after selecting a group
  }
  return (
    <>
      <header>
        <div className="title">
          <h1>Chinese Word Card</h1>
          <button onClick={toggleNavbar}>
            <FaHamburger />
          </button>
        </div>
        <nav className={isOpen ? "visible" : ""}>
          <ul>
            {groups.map((group, index) => (
              <li key={index} onClick={() => handleGroupSelect(group)}>{`word group :${group}`}</li>
            ))}
          </ul>
        </nav>
      </header>
      <div
        className={`overlay ${isOpen ? "visible" : ""}`}
        onClick={toggleNavbar}
      ></div>
    </>
  );
}
