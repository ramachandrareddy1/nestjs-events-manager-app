export async function getAllEvents(){
    const resp = await fetch('http://localhost:8000/events');
    const data = await resp.json();
    const finalResp = data.events.map(e=>Object.assign({},{...e},{id:e._id}))
    return finalResp
}

export async function getAllFeaturedEvents(){
    const resp = await fetch('http://localhost:8000/events/featured');
    const data = await resp.json();
    const events = data.events.map(e=>Object.assign({},{...e},{id:e._id}))
    return events
}

export async function getEventDetails(eventId){
    const resp = await fetch('http://localhost:8000/events/'+eventId);
    const data = await resp.json();
    return {...data.events,id:data.events._id}
}

export async function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;
  
    const allEvents = await getAllEvents();
  
    let filteredEvents = allEvents.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
  
    return filteredEvents;
  }