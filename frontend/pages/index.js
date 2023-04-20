import { getAllFeaturedEvents } from '../helpers/api-util'
import Head from 'next/head';
import EventList from '../components/events/event-list';
import NewsletterRegistration from '../components/input/newsletter-registration'

export default function HomePage(props) {
    const featuredEvents = props.events;
    return (
        <div>
            <Head>
                <title>Next js Events!</title>
            </Head>
            <NewsletterRegistration />
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
