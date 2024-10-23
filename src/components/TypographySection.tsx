import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import React from 'react';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

function H1({ children, className = '' }: TypographyProps) {
  return <Heading level={1} className={`text-4xl mb-8 ${className}`}>{children}</Heading>;
}

function H2({ children, className = '' }: TypographyProps) {
  return <Heading level={2} className={`text-3xl mb-4 ${className}`}>{children}</Heading>;
}

function H3({ children, className = '' }: TypographyProps) {
  return <Heading level={3} className={`text-2xl mb-4 ${className}`}>{children}</Heading>;
}

function H4({ children, className = '' }: TypographyProps) {
  return <Heading level={4} className={`text-xl mb-4 ${className}`}>{children}</Heading>;
}

function H5({ children, className = '' }: TypographyProps) {
  return <Heading level={5} className={`text-lg mb-4 ${className}`}>{children}</Heading>;
}

function H6({ children, className = '' }: TypographyProps) {
  return <Heading level={6} className={`text-md mb-4 ${className}`}>{children}</Heading>;
}

function Paragraph({ children, className = '' }: TypographyProps) {
  return <Text className={`mb-2 ${className}`}>{children}</Text>;
}

export function TypographySection() {
  return (
    <div className="mb-8 px-4 sm:px-6 lg:px-8">
      <H1>Typography</H1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <H2>Headings</H2>
          <H1>Heading 1</H1>
          <H2>Heading 2</H2>
          <H3>Heading 3</H3>
          <H4>Heading 4</H4>
          <H5>Heading 5</H5>
          <H6>Heading 6</H6>
        </div>
        <div>
          <H2>Paragraphs</H2>
          <Paragraph>This is a standard paragraph.</Paragraph>
          <Paragraph className="font-bold">This is bold text.</Paragraph>
          <Paragraph className="italic">This is italic text.</Paragraph>
          <Paragraph className="underline">This is underlined text.</Paragraph>
        </div>
        <div>
          <H2>Blockquote</H2>
          <TypographyBlockquote />
        </div>
        <div>
          <H2>Table</H2>
          <TypographyTable />
        </div>
        <div>
          <H2>List</H2>
          <TypographyList />
        </div>
        <div>
          <H2>Lead</H2>
          <TypographyLead />
        </div>
        <div>
          <H2>Large</H2>
          <TypographyLarge />
        </div>
        <div>
          <H2>Small</H2>
          <TypographySmall />
        </div>
        <div>
          <H2>Muted</H2>
          <TypographyMuted />
        </div>
      </div>
    </div>
  );
}

export function TypographyBlockquote() {
  return (
    <blockquote className="mt-6 border-l-2 pl-4 sm:pl-6 italic">
      &quot;After all,&quot; he said, &quot;everyone enjoys a good joke, so it&apos;s only fair that
      they should pay for the privilege.&quot;
    </blockquote>
  );
}

export function TypographyTable() {
  return (
    <div className="my-6 w-full overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="m-0 border-t p-0 even:bg-muted">
            <th className="border px-2 sm:px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
              King&apos;s Treasury
            </th>
            <th className="border px-2 sm:px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
              People&apos;s happiness
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="m-0 border-t p-0 even:bg-muted">
            <td className="border px-2 sm:px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Empty
            </td>
            <td className="border px-2 sm:px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Overflowing
            </td>
          </tr>
          <tr className="m-0 border-t p-0 even:bg-muted">
            <td className="border px-2 sm:px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Modest
            </td>
            <td className="border px-2 sm:px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Satisfied
            </td>
          </tr>
          <tr className="m-0 border-t p-0 even:bg-muted">
            <td className="border px-2 sm:px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Full
            </td>
            <td className="border px-2 sm:px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Ecstatic
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export function TypographyList() {
  return (
    <ul className="my-6 ml-4 sm:ml-6 list-disc [&>li]:mt-2">
      <li>1st level of puns: 5 gold coins</li>
      <li>2nd level of jokes: 10 gold coins</li>
      <li>3rd level of one-liners : 20 gold coins</li>
    </ul>
  );
}

export function TypographyLead() {
  return (
    <p className="text-xl text-muted-foreground">
      A modal dialog that interrupts the user with important content and expects
      a response.
    </p>
  );
}

export function TypographyLarge() {
  return <div className="text-lg font-semibold">Are you absolutely sure?</div>;
}

export function TypographySmall() {
  return (
    <small className="text-sm font-medium leading-none">Email address</small>
  );
}

export function TypographyMuted() {
  return (
    <p className="text-sm text-muted-foreground">Enter your email address.</p>
  );
}
