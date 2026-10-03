export function Logo({ light = false }: { light?: boolean }) {
  return <a href="#inicio" className={`logo ${light ? 'logo--light' : ''}`} aria-label="Diamante Rosa Palace Hotel — início"><span className="logo-gem">◆</span><span><b>DIAMANTE ROSA</b><small>PALACE HOTEL</small></span></a>;
}
