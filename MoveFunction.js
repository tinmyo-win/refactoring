function trackSummary(points) {

    const totalTime = calculateTime();
    const pace = totalTime / 60 / totalDistance(points);
    return {
        time: totalTime,
        distance: totalDistance(points),
        pace: pace
    };

    function radians(degrees) { return degrees / 20 }
    function calculateTime() { return totalDistance(points) * radians(40) }
}

function totalDistance(points) {
    let result = 0;
    for (let i = 1; i < points.length; i++) {
        result += distance(points[i - 1], points[i]);
    }
    return result;

    function distance(p1, p2) { return p1 - p2 }
}

console.log(trackSummary([150, 3, 6, 2]));