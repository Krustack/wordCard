import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
import Card from "./Card.jsx";
import { useEffect, useState } from "react";

export default function Main({ groupData }) {
  const [showHint, setShowHint] = useState(false);
  const [cardIndex, setCardIndex] = useState(0);
  useEffect(() => {setCardIndex(0)}, [groupData]);
  function toggleHint() {
    setShowHint((prev) => !prev);
  }
  const cardData = groupData[cardIndex] || {};
  function handleNext() {
    setCardIndex((prevIndex) => (prevIndex + 1) % groupData.length);
    setShowHint(false); // Reset hint visibility when changing card
  }

  function handlePrevious() {
    setCardIndex(
      (prevIndex) => (prevIndex - 1 + groupData.length) % groupData.length
    );
    setShowHint(false); // Reset hint visibility when changing card
  }
  return (
    <main>
      <Card cardData={cardData} toggleHint={toggleHint} showHint={showHint} />
      <div className="btn-group">
        <button className="skip" onClick={handlePrevious}>
          <MdNavigateBefore />
        </button>
        <button className="skip" onClick={handleNext}>
          <MdNavigateNext />
        </button>
      </div>
    </main>
  );
}
