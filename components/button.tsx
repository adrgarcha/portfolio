interface ButtonProps {
   variant?: 'primary' | 'secondary';
   children: React.ReactNode;
}

export default function Button({ variant = 'primary', children }: ButtonProps) {
   return (
      <button
         className={`flex items-center gap-x-2 px-4 md:px-5 py-2 bg-${variant} text-foreground text-xs md:text-base rounded-lg font-medium [&>svg]:size-4 [&>svg]:md:size-6`}>
         {children}
      </button>
   );
}
