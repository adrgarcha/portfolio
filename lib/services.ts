import type { Service, ServiceToken } from './types';

export const SERVICES: Service[] = [
   { id: 'web', href: '/servicios#web', featured: true, num: '01' },
   { id: 'integraciones', href: '/servicios#integraciones', num: '02' },
   { id: 'movil', href: '/servicios#movil', num: '03' },
   { id: 'mantenimiento', href: '/servicios#mantenimiento', num: '04' },
];

export function toTokens(labels: string[]): ServiceToken[] {
   return labels.map((label, i) => (i === 0 ? { label, accent: true } : { label }));
}
