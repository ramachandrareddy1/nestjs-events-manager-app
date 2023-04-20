import { Fragment } from 'react';
import { useRouter } from 'next/router';
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';
import { getAllEvents} from '../../helpers/api-util';
import Head from 'next/head';

function AllEventsPage(props) {
  const router = useRouter();
  const events = props.events;
  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <Fragment>
      <Head>
        <title>All List of event details</title>
      </Head>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList events={events} />
    </Fragment>
  );
}

export async function getStaticProps(){
  const events= await getAllEvents();
  return {
    props:{
      events: events
    },
    revalidate: 60
  }
}

export default AllEventsPage;