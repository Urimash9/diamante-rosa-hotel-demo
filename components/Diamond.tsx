type DiamondMarkerProps = { className?: string };

export function DiamondMarker({ className = '' }: DiamondMarkerProps) {
  return <svg className={`diamond-marker ${className}`} viewBox="0 0 24 22" aria-hidden="true" focusable="false">
    <path d="M5 2h14l4 6-11 12L1 8 5 2Z"/>
    <path className="diamond-facet" d="m5 2 7 18L19 2M1 8h22M5 2l7 6 7-6"/>
  </svg>;
}

export const Diamond = DiamondMarker;
