const joinNames = namesObj => {

    return namesObj.map(names => names.name).join(", ").replace(/,(?!.*,)/gmi, " &");
};
module.exports = joinNames;
