import { getFeaturedEvents} from '../data'
import EventList from '@/components/events/event-list';

export default function HomePage(){
    const allEventsData = getFeaturedEvents();
    return (
    <div>
       <EventList events={allEventsData}></EventList>
    </div>
    )
}