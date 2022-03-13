const contact = () => {
    
    const content = document.createElement('div');

    const operationHour = [{'day':'Monday', 'hours': '10-3'}, {'day':'Tuesday', 'hours': '10-3'}, {'day':'Wednesday', 'hours': 'closed'}, {'day':'Thursday', 'hours': '10-5'}, {'day':'Friday', 'hours': '10-5'}, {'day':'Saturday', 'hours': '9-5'}, {'day':'Sun', 'hours': '10-2'}];
   
    content.insertAdjacentText('beforeend', "Open:");
    const hoursList = document.createElement('ul');

    for (let day of operationHour){
        let listItem = document.createElement('li');

        listItem.insertAdjacentText("afterbegin", `${day.day}: `);
        
        listItem.insertAdjacentText("beforeend", ` ${day.hours}`);
        hoursList.appendChild(listItem);
    }
    content.appendChild(hoursList);


    content.insertAdjacentHTML('beforeend', '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d88269.14561238376!2d-63.205930166120496!3d46.26193981593221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b5e52ddd47f83c5%3A0x5a5777b89f519b27!2sCharlottetown%2C%20PE!5e0!3m2!1sen!2sca!4v1647005524698!5m2!1sen!2sca" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>');


    return content;
}

export { contact };