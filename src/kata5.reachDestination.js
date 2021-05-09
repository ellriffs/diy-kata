const reachDestination = (distance, speed) => {

    let hours = distance/speed;
    const time = Math.round(2*hours)/2
    return "I should be there in "+ time +" hours"


};

module.exports = reachDestination;
