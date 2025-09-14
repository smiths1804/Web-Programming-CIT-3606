     var now = new Date();

    // finds the time/date and uses it to determine the message
    var targetTime = new Date(now.getFullYear(), now.getMonth(), now.getDay(), 12, 0, 0);

    var millisTillTarget = targetTime - now;

    // used to find the specific time
    if (millisTillTarget < 0) {
        targetTime.setDate(targetTime.getDate() + 1);
        millisTillTarget = targetTime - now;
    }

    setTimeout(function() {
        var current = new Date();
        if (current.getHours() < 12) {
            alert("Good morning!");
        } else {
            alert("Good evening!");
        }
    }, millisTillTarget);
