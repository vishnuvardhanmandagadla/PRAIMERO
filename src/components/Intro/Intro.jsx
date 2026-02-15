import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import './Intro.css';

export default function Intro({ onComplete }) {
  const overlayRef = useRef(null);
  const contentRef = useRef(null);
  const aiRef = useRef(null);
  const [done, setDone] = useState(false);

  const lettersBeforeAI = ['P', 'R'];
  const lettersAfterAI = ['M', 'E', 'R', 'O'];

  const beforeAIRefs = useRef([]);
  const afterAIRefs = useRef([]);

  useEffect(() => {
    if (done) return;

    document.body.style.overflow = 'hidden';

    const startAnimation = () => {
      if (!aiRef.current || !overlayRef.current || !contentRef.current) {
        setTimeout(startAnimation, 100);
        return;
      }

      // Check if letter refs are populated
      const beforeRefsReady = beforeAIRefs.current.filter(ref => ref).length === lettersBeforeAI.length;
      const afterRefsReady = afterAIRefs.current.filter(ref => ref).length === lettersAfterAI.length;

      if (!beforeRefsReady || !afterRefsReady) {
        setTimeout(startAnimation, 100);
        return;
      }

      gsap.set(aiRef.current, { opacity: 0 });
      gsap.set(overlayRef.current, { clipPath: 'inset(0% 0% 0% 0%)' });
      gsap.set(contentRef.current, { opacity: 1, y: 0, scale: 1 });

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

      // Hold AI visible for a moment
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

      // Phase 3: Hold all letters visible
      tl.to({}, { duration: 0.8 });

      // Phase 4: Fade out text content, then unmask the hero
      tl.to(contentRef.current, {
        opacity: 0,
        y: -40,
        duration: 0.5,
        ease: 'power2.in',
      }, '+=0.2');

      // Phase 5: Curtain rises — clip entire intro from bottom to top,
      // progressively unmasking the real hero underneath
      tl.to(overlayRef.current, {
        clipPath: 'inset(0% 0% 100% 0%)',
        duration: 1.0,
        ease: 'power3.inOut',
        onComplete: () => {
          document.body.style.overflow = '';
          setDone(true);
          setTimeout(() => {
            onComplete?.();
          }, 100);
        },
      }, '-=0.3');
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
      <div className="intro__bg" />
      <div className="intro__content" ref={contentRef}>
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
    </div>
  );
}
