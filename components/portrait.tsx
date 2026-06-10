import Image from 'next/image';

interface PortraitProps {
   src?: string;
   alt?: string;
   placeholder?: string;
   tagPrefix: string;
   tagText: string;
}

export default function Portrait({ src, alt, placeholder, tagPrefix, tagText }: PortraitProps) {
   return (
      <div className="portrait">
         <span className="corner tl" />
         <span className="corner br" />
         <div className="frame">
            {src ? (
               <>
                  <Image src={src} alt={alt || ''} fill sizes="360px" style={{ objectFit: 'cover' }} priority />
                  <div className="duo" />
                  <div className="scan" />
               </>
            ) : (
               <div className="ph" style={{ aspectRatio: 1, minHeight: 280 }}>
                  {placeholder}
               </div>
            )}
         </div>
         <span className="tag">
            <b>{tagPrefix}</b> {tagText}
         </span>
      </div>
   );
}
