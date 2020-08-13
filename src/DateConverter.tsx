let today: string = ''
    + new Date().getDate()
    + '/'
    + (new Date().getMonth() + 1)
    + '/'
    + new Date().getFullYear();
if (today.split('/')[0].length === 1) {
    today = '0' + today
}

let tomorrow: string = ''
    + (new Date().getDate() + 1)
    + '/'
    + (new Date().getMonth() + 1)
    + '/'
    + new Date().getFullYear();
if (tomorrow.split('/')[0].length === 1) {
    tomorrow = '0' + tomorrow
}

function DateConverter(date: string) {
    switch(date){
        case today:
            return 'Today';
        case tomorrow:
            return 'Tomorrow';
        default:
            return date;
    }

}

export default DateConverter