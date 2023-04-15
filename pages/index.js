import { getAllFeaturedEvents } from '../helpers/api-util'
import EventList from '@/components/events/event-list';

export default function HomePage(props) {
    const featuredEvents = props.events;
    return (
        <div>
            <EventList events={featuredEvents}></EventList>
        </div>
    )
}

export async function getStaticProps() {
    const events = await getAllFeaturedEvents();
    console.log('Events',events)
    return {
        props: {
            events
        },
        revalidate: 10
    }
}
