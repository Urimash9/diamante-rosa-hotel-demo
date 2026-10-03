'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { stayOptions } from '@/data/hotel';

export function StayShowcase() {
  const [active, setActive] = useState(0);
  const touchStart = useRef<number | null>(null);
  const item = stayOptions[active];
  const move = (direction: number) => setActive((active + direction + stayOptions.length) % stayOptions.length);

  const finishSwipe = (x: number) => {
    if (touchStart.current !== null && Math.abs(x - touchStart.current) > 45) move(x < touchStart.current ? 1 : -1);
    touchStart.current = null;
  };

  return <div className="showcase">
    <div className="showcase-tabs" role="tablist" aria-label="Acomodações e experiências">
      {stayOptions.map((option, index) => <button key={option.title} role="tab" aria-selected={index === active} onClick={() => setActive(index)}><span>{String(index + 1).padStart(2, '0')}</span>{option.short}</button>)}
    </div>
    <div className="suite-main" onTouchStart={event => touchStart.current = event.touches[0].clientX} onTouchEnd={event => finishSwipe(event.changedTouches[0].clientX)}>
      <div className="suite-photo" key={item.image}><Image src={item.image} alt={item.alt} fill sizes="(max-width: 800px) 100vw, 55vw" priority={active === 0}/></div>
      <div className="suite-card" aria-live="polite"><span>{item.label}</span><h3>{item.title}</h3><p>{item.description}</p><ul>{item.features.map(feature => <li key={feature}>{feature}</li>)}</ul><div className="suite-controls"><button onClick={() => move(-1)} aria-label="Item anterior">←</button><b>{String(active + 1).padStart(2, '0')} / {String(stayOptions.length).padStart(2, '0')}</b><button onClick={() => move(1)} aria-label="Próximo item">→</button></div></div>
      <button className="suite-preview" onClick={() => move(1)} aria-label={`Ver ${stayOptions[(active + 1) % stayOptions.length].title}`}><Image src={stayOptions[(active + 1) % stayOptions.length].image} alt="" fill sizes="20vw"/></button>
      <div className="suite-dots" aria-label="Selecionar acomodação">{stayOptions.map((option, index) => <button key={option.title} className={index === active ? 'active' : ''} onClick={() => setActive(index)} aria-label={`Ver ${option.title}`} aria-current={index === active ? 'true' : undefined}/>)}</div>
    </div>
  </div>;
}
