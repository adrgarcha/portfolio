interface ButtonProps {
   variant?: 'primary' | 'secondary';
   children: React.ReactNode;
}

export default function Button({ variant = 'primary', children }: ButtonProps) {
   return (
      <button
         className={`flex items-center gap-x-2 px-4 md:px-5 py-2 border text-xs md:text-base rounded-lg font-medium [&>svg]:size-4 [&>svg]:md:size-6 hover:bg-foreground transition-colors ${
            variant === 'primary'
               ? 'text-foreground bg-primary border-primary hover:text-primary'
               : 'text-tertiary bg-secondary border-secondary hover:text-secondary dark:hover:bg-background'
         }`}>
         {children}
      </button>
   );
}
