import EventItem from "./event-item";
export default function EventList(props){
    const events = props.events;
    return(
        <div>
            {events.map((event)=>{
                return(
                 <EventItem
                   id={event.id}
                   title={event.title}
                   location={event.location}
                   date={event.date}
                   image={event.image}
                 >
                 </EventItem>
                )
            })}
        </div>
    )
}