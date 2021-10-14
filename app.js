let API_KEY = 'qnijM37ihRFu5YgP4NdXg2fn3xUIqVUqxcy5ZxZy'
//i could have input be mm/dd/yyyy, then just use a .split {/} then just reverse that new array, that way they can chose
//make todays date to be easy, once everything is finished let this be chosen
//i think it would be cool if it could tweet a user
let API_URL = `https://api.nasa.gov/DONKI/notifications?startDate=2021-09-07&endDate=2021-10-12&type=all&api_key=${API_KEY}`

let selectedEventIndex

getNasaInfo().then(event => {
    selectedEventIndex = event.length - event.length
    displaySelectedEvent(event)

})

const currentMessageElement = document.querySelector('[data-message-body]')

function displaySelectedEvent(event) {
    const selectedEvent = event[selectedEventIndex]
    currentMessageElement.innerText = selectedEvent.eventMessage

}

function getNasaInfo() {
    return fetch(API_URL)
        .then(res => res.json())
        .then(data => {
            const {
                ...spaceEvent
            } = data
            return Object.entries(spaceEvent).map(([event, data]) => {
                return {
                    event: event,
                    eventType: data.messageType,
                    eventDate: data.messageIssueTime,
                    eventURL: data.messageURL,
                    eventMessage: data.messageBody

                }
            })

        })
}

//can we use electro magnetism like earths magnetic belt, to propell space ships faster?