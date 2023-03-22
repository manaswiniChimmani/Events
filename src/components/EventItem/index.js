// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, setEventId, isActive} = props
  const {id, name, location, imageUrl} = eventDetails
  const eventImg = isActive ? 'event-image active' : 'event-image'

  const onClickEventItem = () => {
    setEventId(id)
  }

  return (
    <li className="event">
      <button type="button" className="btn" onClick={onClickEventItem}>
        <img src={imageUrl} alt="event" className={eventImg} />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
