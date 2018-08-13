const formatDate = (timeInSeconds) => {
    if (timeInSeconds<60){
        var secs = Math.floor(timeInSeconds);
        return `${secs}s`;
    } else if (timeInSeconds===undefined){
        var secs = 0;
        return `${secs}s`;
    } else if (timeInSeconds%60===0 && timeInSeconds<3600){
        var mins = timeInSeconds/60;
        return `${mins}m`;
    } else if (timeInSeconds%3600===0 && timeInSeconds>=3600){
        var hours = timeInSeconds/3600;
        return `${hours}h`;
    } else if (timeInSeconds%60===0 && timeInSeconds>=3600){
        var hours = Math.floor(timeInSeconds/3600);
        var mins = Math.floor((timeInSeconds-(hours*3600))/60);
        return `${hours}h ${mins}m`;
    } else if (timeInSeconds>=3600 && timeInSeconds%3600<60 && timeInSeconds%3600>0){
        var hours = Math.floor(timeInSeconds/3600);
        var secs = Math.floor(timeInSeconds-(hours*3600));
        return `${hours}h ${secs}s`
    } else if (timeInSeconds>=3600){
        var hours = Math.floor(timeInSeconds/3600);
        var mins = Math.floor((timeInSeconds-(hours*3600))/60);
        var secs = Math.floor(timeInSeconds-(hours*3600)-(mins * 60));
        return `${hours}h ${mins}m ${secs}s`
    } else {
        var mins = Math.floor(timeInSeconds/60);
        var secs = Math.floor(timeInSeconds-(mins * 60));
        return `${mins}m ${secs}s`
    }
}
  
module.exports = formatDate;