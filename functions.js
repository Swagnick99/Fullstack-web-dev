function sleepIn(weekday, vacation) {
    return (!weekday || vacation);
}

function monkeyTrouble(aSmile, bSmile) {
    return ((aSmile && bSmile) || (!aSmile && !bSmile));
}

function stringTimes(str, n) {
    var copy="";
    for (var i = 0; i < n; i++)
        copy += str;
    return copy;
}

function luckySum(a, b, c) {
    if (a === 13)
        return 0;
    else if (b === 13)
        return a;
    else if (c === 13)
        return a+b;
    else
        return a+b+c;
}

function caught_speeding(speed, is_birthday) {
    if (is_birthday) {
        if (speed <= 65)
            return 0;
        else if (speed > 85)
            return 2;
        else
            return 1;
    }
    else {
        if (speed <= 60)
            return 0;
        else if (speed > 80)
            return 2;
        else
            return 1;
    }
}

function makeBricks(small, big, goal) {
    var tot = small + big*5;
    return ((tot >= goal) && (goal%5 <= small));
}