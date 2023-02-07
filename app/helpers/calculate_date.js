export function CalculateDate(date1) {
    //obtener la diferencia en horas
    let difference = (new Date().getTime() - date1.getTime()) / 1000;
    difference /= 60;
    difference /= 60;

    let day = 24,
        week = day*7,
        month = day*30,
        year = day*365;

    if(difference > year){
        return Math.floor(difference / year) + "y ago"
    }else if(difference > month){
        return Math.floor(difference / month) + "m ago"
    }else if(difference > week ){
        return Math.floor(difference / week) + "w ago"
    }else if(difference > (2*day)){
        return Math.floor(difference / day) + "d ago"
    }else if(difference > day){
        return "Yesterday"
    }else if(difference < day){
        return Math.floor(difference) + "h ago"
    }
}