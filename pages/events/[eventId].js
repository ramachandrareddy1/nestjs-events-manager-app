import { Fragment } from 'react';
import { useRouter } from 'next/router';
import { getEventById } from '../../data';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import ErrorAlert from '../../components/ui/error-alert';
import { getEventDetails,getAllEvents } from '../../helpers/api-util';

function EventDetailPage(props) {
const event = props.event;
  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
    );
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export async function getStaticPaths(){
  const events = await getAllEvents();
  const paths = events.map((event)=>({params:{eventId:event._id}}))
  return {
    paths:paths,
    fallback: true
  }
}

export async function getStaticProps(context){
  const { params } = context;
  const eventId = params.eventId;
  const eventData = await getEventDetails(eventId);
  return {
    props:{
      event: eventData
    },
    revalidate: 30
  }
}
export default EventDetailPage;