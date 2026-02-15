import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import './Intro.css';

export default function Intro({ onComplete }) {
  const overlayRef = useRef(null);
  const aiRef = useRef(null);
  const glowRef = useRef(null);
  const wipeRef = useRef(null);
  const centerRef = useRef(null);
  const [done, setDone] = useState(false);

  const lettersBeforeAI = ['P', 'R'];
  const lettersAfterAI = ['M', 'E', 'R', 'O'];

  const beforeAIRefs = useRef([]);
  const afterAIRefs = useRef([]);

  useEffect(() => {
    if (done) return;

    document.body.style.overflow = 'hidden';

    const startAnimation = () => {
      if (!aiRef.current || !overlayRef.current || beforeAIRefs.current.length === 0 || afterAIRefs.current.length === 0) {
        setTimeout(startAnimation, 100);
        return;
      }

      gsap.set(aiRef.current, { opacity: 0 });
      gsap.set(overlayRef.current, { opacity: 1 });
      gsap.set(glowRef.current, { opacity: 0, scale: 0.5 });
      gsap.set(wipeRef.current, { scaleY: 0 });

      beforeAIRefs.current.forEach((letterRef) => {
        if (letterRef) {
          gsap.set(letterRef, {
            opacity: 0,
            x: -100,
            transformOrigin: 'center center'
          });
        }
      });

      afterAIRefs.current.forEach((letterRef) => {
        if (letterRef) {
          gsap.set(letterRef, {
            opacity: 0,
            x: -100,
            transformOrigin: 'center center'
          });
        }
      });

      const tl = gsap.timeline();

      // Phase 1: AI appears first slowly
      tl.to(aiRef.current, {
        opacity: 1,
        duration: 1.5,
        ease: 'power2.out',
      });

      tl.to({}, { duration: 0.3 });

      // Phase 2: Letters swipe in one by one
      const allLetters = [...beforeAIRefs.current, ...afterAIRefs.current].filter(ref => ref);
      tl.to(allLetters, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.15,
      }, '+=0.2');

      // Phase 3: Hold
      tl.to({}, { duration: 0.8 });

      // Phase 4: Center content floats up and fades out
      tl.to(centerRef.current, {
        opacity: 0,
        y: -50,
        scale: 0.96,
        duration: 0.6,
        ease: 'power3.inOut',
      }, '+=0.2');

      tl.to(glowRef.current, {
        opacity: 0,
        scale: 0.5,
        duration: 0.6,
        ease: 'power2.inOut',
      }, '-=0.6');

      // Phase 5: White wipe slides up from bottom
      tl.to(wipeRef.current, {
        scaleY: 1,
        duration: 0.7,
        ease: 'power4.inOut',
      }, '-=0.3');

      // Phase 6: Complete — unmount after wipe covers screen
      tl.call(() => {
        document.body.style.overflow = '';
        setDone(true);
        setTimeout(() => {
          onComplete?.();
        }, 100);
      });
    };

    const timeout = setTimeout(startAnimation, 300);

    return () => {
      clearTimeout(timeout);
      document.body.style.overflow = '';
    };
  }, [done, onComplete, lettersBeforeAI.length, lettersAfterAI.length]);

  if (done) return null;

  return (
    <div className="intro" ref={overlayRef}>
      <div className="intro__content" ref={centerRef}>
        <div className="intro__glow" ref={glowRef}></div>

        <h1 className="intro__text">
          {lettersBeforeAI.map((letter, index) => (
            <div
              key={`before-${index}`}
              className="intro__letter"
            >
              <span
                ref={(el) => {
                  beforeAIRefs.current[index] = el;
                }}
              >
                {letter}
              </span>
            </div>
          ))}

          <span className="intro__ai" ref={aiRef}>AI</span>

          {lettersAfterAI.map((letter, index) => (
            <div
              key={`after-${index}`}
              className="intro__letter"
            >
              <span
                ref={(el) => {
                  afterAIRefs.current[index] = el;
                }}
              >
                {letter}
              </span>
            </div>
          ))}
        </h1>
      </div>

      {/* White wipe — slides up from bottom to cover screen */}
      <div className="intro__wipe" ref={wipeRef}></div>
    </div>
  );
}
