import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Diamante Rosa Palace Hotel | Coromandel MG',
  description: 'Hotel em Coromandel com conforto, atendimento acolhedor, café da manhã, estacionamento, Wi-Fi e estrutura para hospedagem e eventos.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
