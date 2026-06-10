import Link from 'next/link';

import type { Service } from '@/lib/types';
import Reveal from './reveal';
import Tokens from './tokens';

interface ServiceCardProps {
   service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
   return (
      <Reveal as="article" className="card svc">
         <h3>
            <span className="prompt"></span>
            {service.title}
         </h3>
         <p className="lead">{service.lead}</p>
         <ul>
            {service.bullets.map((bullet) => (
               <li key={bullet}>{bullet}</li>
            ))}
         </ul>
         <div className="svc-foot">
            <Tokens tokens={service.tokens} />
            <Link className="link-arrow" href={service.href}>
               Ver detalle <span className="arrow">→</span>
            </Link>
         </div>
      </Reveal>
   );
}
