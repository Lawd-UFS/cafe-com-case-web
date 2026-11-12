import Link from "next/link";
import type { ComponentProps } from "react";

type LinkProps = ComponentProps<typeof Link> & { href: string };
type ButtonProps = ComponentProps<"button"> & { href?: never };

export type ButtonOrLinkProps = LinkProps | ButtonProps;

export function ButtonOrLink(props: ButtonOrLinkProps) {
  if (props.href !== undefined) {
    if (props.href.startsWith("#")) {
      return <a {...(props as ComponentProps<"a">)} />;
    }

    return <Link {...props} />;
  }

  const { type = "button", ...rest } = props;
  return <button type={type} {...rest} />;
}
