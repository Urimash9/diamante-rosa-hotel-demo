'use client';
import { useState } from 'react';
import { hotel } from '@/data/hotel';
import { Logo } from './Logo';

export function Header() {
  const [open, setOpen] = useState(false);
  const links = [['Acomodações','acomodacoes'],['Experiência','experiencia'],['Estrutura','estrutura'],['Localização','localizacao'],['Contato','contato']];
  return <header className="header"><Logo light/><button className="menu-button" aria-label="Abrir menu" aria-expanded={open} onClick={()=>setOpen(!open)}><span/><span/></button><nav className={open ? 'nav open' : 'nav'}>{links.map(([label,id])=><a key={id} onClick={()=>setOpen(false)} href={`#${id}`}>{label}</a>)}<a className="button button--coral" href={hotel.whatsapp} target="_blank" rel="noreferrer">Reservar <span>↗</span></a></nav></header>;
}
