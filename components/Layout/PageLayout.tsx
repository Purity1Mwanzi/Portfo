interface Props {
  children: React.ReactNode;
}

export default function PageLayout({ children }: Props) {
  return (
    <main
    className="h-full w-full overflow-auto overflow-x-hidden bg-cover bg-no-repeat font-serif text-sm text dark:text-blue xs:text-lg"
    style={{
        backgroundImage: " url('/icons/bg.svg')",
      }}
    >
      {children}
    </main>
  );
}
