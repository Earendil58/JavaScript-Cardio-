// scheduleMeeting(..) should take a start time (in 24-hour format as a string "hh:mm") and 
// a meeting duration (number of minutes). It should return true if the meeting falls entirely within the work day


const dayStart = "07:30";
const dayEnd = "17:45";

function scheduleMeeting(startTime, meetingDuration) {

    if (startTime < dayStart || startTime > dayEnd) {
        return 'The meeting should not start outside working hours.'
    }



}