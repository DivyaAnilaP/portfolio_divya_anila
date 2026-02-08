import { useState, useEffect } from "react";

interface TypewriterProps {
  words: string[];
  speed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
}

const Typewriter = ({
  words,
  speed = 80,
  deleteSpeed = 40,
  pauseTime = 2000,
}: TypewriterProps) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delay, setDelay] = useState(speed);

  useEffect(() => {
    const current = words[wordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const nextText = current.slice(0, text.length + 1);
        setText(nextText);

        if (nextText === current) {
          setIsDeleting(true);
          setDelay(pauseTime); // pause before deleting
        }
      } else {
        const nextText = current.slice(0, text.length - 1);
        setText(nextText);

        if (nextText === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
          setDelay(speed); // typing speed for next word
        } else {
          setDelay(deleteSpeed);
        }
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, speed, deleteSpeed, pauseTime, delay]);

  return (
    <span className="inline-flex items-center">
      <span>{text}</span>
      <span className="ml-0.5 w-[2px] h-[1.1em] bg-primary animate-pulse" />
    </span>
  );
};

export default Typewriter;
