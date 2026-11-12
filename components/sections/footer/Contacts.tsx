import { footer } from "@/content/footer";

import { InstagramIcon, MailIcon, WhatsAppIcon } from "./ContactIcons";

const { contacts } = footer;

const items = [
  {
    ...contacts.instagram,
    Icon: InstagramIcon,
    external: true,
    underline: false,
  },
  {
    ...contacts.whatsapp,
    Icon: WhatsAppIcon,
    external: true,
    underline: false,
  },
  { ...contacts.email, Icon: MailIcon, external: false, underline: true },
];

type ContactsProps = {
  className?: string;
};

export function Contacts({ className = "" }: ContactsProps) {
  return (
    <section
      aria-labelledby="contacts-title"
      className={`flex flex-col gap-5 lg:flex-row lg:items-start lg:gap-[calc(36em/32)] ${className}`}
    >
      <h2
        id="contacts-title"
        className="leading-[1.194] font-bold text-areia uppercase"
      >
        {contacts.title}
      </h2>
      <address className="not-italic">
        <ul className="flex flex-col gap-4 lg:gap-[calc(32em/32)]">
          {items.map(({ name, label, href, Icon, external, underline }) => (
            <li key={name} className="flex">
              <a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className="inline-flex items-center gap-2 text-cenoura transition-opacity duration-200 hover:opacity-50 focus-visible:opacity-50 lg:gap-[calc(9em/32)]"
              >
                <Icon className="size-[calc(48em/32)] shrink-0" />
                <span
                  className={`font-alternates text-xs leading-none font-semibold lg:text-[calc(20em/32)] ${underline ? "underline" : ""}`}
                >
                  <span className="sr-only">{name}: </span>
                  {label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </address>
    </section>
  );
}
