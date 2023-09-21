const tellFortune = function (jobTitle,location,partnerName,numberOfChildren){
    return `‘You will be a ${jobTitle} in ${location} married to ${partnerName}
    with ${numberOfChildren} children`
}

console.log(tellFortune('programmer','New York','Rana',2));