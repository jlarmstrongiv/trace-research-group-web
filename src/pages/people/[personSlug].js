import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import slug from 'slug';
import { people } from 'data';
import DesktopPerson from 'components/DesktopPerson/DesktopPerson';
import MobilePerson from 'components/MobilePerson/MobilePerson';
// Individual page for users in 
const Person = ({ person, nameSlug }) => {
  if (!person) return 'Person not found.';

  const original = (
    <React.Fragment>
      {person.name}
      <br />
      <Link href="/people">
        <a>People</a>
      </Link>
    </React.Fragment>
  );

  return (
    <div>
      <Head>
        <title>Team | TRACE Research Group</title>
        <meta
          name="description"
          content={`${person.name} is an ${person.status} in the TRACE Research Group.`}
        />
      </Head>
      <MobilePerson person={person} nameSlug={nameSlug} />
      <DesktopPerson person={person} nameSlug={nameSlug} />
    </div>
  );
};

Person.getInitialProps = ({ query }) => {
  const { personSlug } = query;

  const person = people.find(person => {
    return (
      slug(person.name, { lower: true }) === personSlug
    );
  });

  return { person, nameSlug: personSlug };
};

export default Person;
