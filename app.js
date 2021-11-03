let API_KEY = 'qnijM37ihRFu5YgP4NdXg2fn3xUIqVUqxcy5ZxZy'



let endDate = new Date()
let currentYear = endDate.getFullYear()
let currentMonth = endDate.getMonth()
let currentDay = endDate.getDate()

let startDate = '2021/05/05'

//i could have input be mm/dd/yyyy, then just use a .split {/} then just reverse that new array, that way they can chose
//make todays date to be easy, once everything is finished let this be chosen
//i think it would be cool if it could tweet a user
let API_URL = `https://api.nasa.gov/DONKI/notifications?startDate=${startDate}&endDate=${endDate}&type=all&api_key=${API_KEY}`

getNasaInfo().then(event => {
    
    event.forEach(event => displaySelectedEvent(event))
  

});

const currentMessageElement = document.querySelector('[data-message-body]')
const currentMessageDateElement = document.querySelector('[data-message-Time]')
const currentEventTypeElement = document.querySelector('[data-event-Type]')
const cardBody = document.getElementsByClassName("card-body")

function displaySelectedEvent(event) {
    let div = document.createElement("div")
    currentMessageElement.append(div)

    div.setAttribute("id", `div_${event.eventDate}`)
    document.getElementById(`div_${event.eventDate}`).innerHTML = 
    `<p>
        <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#${event.eventType}${event.eventDate}" aria-expanded="false" aria-controls="${event.eventType}${event.eventDate}">
            ${event.eventType}/${event.eventDate}
        </button>
    </p>
    <div class="collapse" id="${event.eventType}${event.eventDate}">
        ${event.eventMessage}
    </div>`

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

//add function to be able to have entire list between specified time frame unter a clickable event
//where each list item has their own expandable and collapsable breakeaway 

//have api have choseable dates

//have default date be tomorrows date, and 1 week ago

//have background picture be based on the report ex. cme, have a cme in the background on that part of the body for said list item

//have collabsible div chose by date, or event type
//if event type still order by closest date to earliest date, top to bottom
//need to have a function that goes through all api ul
//create a new div for each event typ and when clicked it shows the message body




