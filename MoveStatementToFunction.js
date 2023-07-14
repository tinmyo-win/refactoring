function renderPerson(outStream, person) {
    const result = [];
    result.push(`<p>${person.name}</p>`);
    // result.push(renderPhoto(person.photo));
    result.push(emitPhotoData(person.photo));
    return result.join("\n");
}

function photoDiv(aPhoto) {
    return [
        "<div>",
        emitPhotoData(aPhoto),
        "</div>",
    ].join("\n");
}

function emitPhotoData(aPhoto) {
    return [
        `<p>title: ${aPhoto.title}</p>`,
        `<p>location: ${aPhoto.location}</p>`,
        `<p>date: ${aPhoto.date.toDateString()}</p>`,
    ].join("\n");
}

const person = {
    'name': "Mg Mg"
}

const photo = {
    'title': "Pofile",
    'location': 'mandalay',
    'date': new Date,
}

person.photo = photo;

console.log(renderPerson(null, person));
console.log('----------------------------');
console.log(photoDiv(photo));