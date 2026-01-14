import React, { useState, useEffect } from "react";

const TypedText = ({
  strings,
  typeSpeed = 100,
  backSpeed = 100,
  backDelay = 1000,
  loop = true,
}) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [stringIndex, setStringIndex] = useState(0);

  useEffect(() => {
    const currentString = strings[stringIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          setCurrentText(currentString.substring(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);

          if (currentIndex + 1 === currentString.length) {
            if (loop || stringIndex < strings.length - 1) {
              setTimeout(() => setIsDeleting(true), backDelay);
            }
          }
        } else {
          // Deleting
          setCurrentText(currentString.substring(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);

          if (currentIndex - 1 === 0) {
            setIsDeleting(false);
            setStringIndex((stringIndex + 1) % strings.length);
          }
        }
      },
      isDeleting ? backSpeed : typeSpeed
    );

    return () => clearTimeout(timeout);
  }, [
    currentIndex,
    isDeleting,
    stringIndex,
    strings,
    typeSpeed,
    backSpeed,
    backDelay,
    loop,
  ]);

  return (
    <span className="text-blue-600 dark:text-blue-400">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypedText;
