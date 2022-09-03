const locationFormFields = [
    {
        label: 'Location 1',
        name: 'location_1'
    }
]
$(document).ready(() => {
    console.info('UI is loading..');
    const locationsGroup = document.getElementById('locations-group')
    // Load the first location
    const formGroup = createFormGroup(0)
    // Append the formgroup div to locations group div
    locationsGroup.appendChild(formGroup)
    console.info('UI loaded..')
});

const addLocation = (index) => {
    const locationsGroup = document.getElementById('locations-group')
    const formGroup = createFormGroup(index)
    // Append the formgroup div to locations group div
    locationsGroup.appendChild(formGroup)
}
const removeLocation = (index) => {

}

const createFormGroup = (index = 0) => {
    const currentIndex = index + 1;
    // Create a formgroup div
    const formGroup = document.createElement('div')
    formGroup.setAttribute("class", 'form-group')
    // Create a label 
    const label = document.createElement("label")
    label.innerText = `Location ${currentIndex}`
    label.setAttribute("for", `location_${currentIndex}`)
    // Create textbox 
    const textbox = document.createElement("input")
    textbox.setAttribute("id", `location_${currentIndex}`)
    textbox.setAttribute("type", "text")
    textbox.setAttribute("name", `location_${currentIndex}`)
    textbox.setAttribute("placeholder", `Location ${currentIndex}`)
    textbox.setAttribute("class", 'form-control')

    // Create an add button
    const addBtn = document.createElement("button")
    addBtn.setAttribute("id", `add_location_${currentIndex}`)
    addBtn.setAttribute("type", "button")
    addBtn.setAttribute("name", `add_location_${currentIndex}`)
    addBtn.className = "btn btn-success add-btn"
    addBtn.innerText = "+"

    addBtn.addEventListener('click', (e) => {
        addLocation(currentIndex)
    })

    // Create a remove button
    const removeBtn = document.createElement("button")
    removeBtn.setAttribute("id", `remove_location_${currentIndex}`)
    removeBtn.setAttribute("type", "button")
    removeBtn.setAttribute("name", `remove_location_${currentIndex}`)
    removeBtn.className = "btn btn-danger remove-btn"
    removeBtn.innerText = "-"

    removeBtn.addEventListener('click', (e) => {
        removeLocation(currentIndex)
    })

    // Append label, textbox, add button & remove button to form group div
    // formGroup.appendChild(label);
    formGroup.appendChild(textbox);
    formGroup.appendChild(addBtn);
    // formGroup.appendChild(removeBtn);

    // Hide the add btn for all previous location fields
    $('.add-btn').each((index, eachBtn) => {
        $(eachBtn).hide();
    });
    return formGroup;
}
