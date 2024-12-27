interface ButtonProps {
   variant?: 'primary' | 'secondary';
   children: React.ReactNode;
}

export default function Button({ variant = 'primary', children }: ButtonProps) {
   return <button className={`flex items-center gap-x-2 px-5 py-2 bg-${variant} text-foreground rounded-lg font-medium`}>{children}</button>;
}
