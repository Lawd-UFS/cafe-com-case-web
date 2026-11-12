type ContactsLetteringProps = {
  className?: string;
};

export function ContactsLettering({ className = "" }: ContactsLetteringProps) {
  return (
    <>
      <span className="sr-only">Canais de contato</span>
      <span
        aria-hidden
        className={`block bg-current [mask-image:url(/images/contacts-lettering.svg)] [mask-size:contain] [mask-repeat:no-repeat] ${className}`}
      />
    </>
  );
}
