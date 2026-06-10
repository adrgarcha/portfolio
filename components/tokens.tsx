import type { ServiceToken } from '@/lib/types';

interface TokensProps {
   tokens: ServiceToken[];
}

export default function Tokens({ tokens }: TokensProps) {
   return (
      <div className="token-row">
         {tokens.map((token) => (
            <span key={token.label} className={`token${token.accent ? ' accent' : ''}`}>
               {token.label}
            </span>
         ))}
      </div>
   );
}
