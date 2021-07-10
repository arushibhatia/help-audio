function textContacts() {
    // get the person's contacts from the Firebase database

    // turn the object (key: contact name, value: object phone number) into an array of phone numbers
    let allContacts = {}; // database contacts object
    let phoneNumArr = Object.values(allContacts);
    let sendString = userName + " is in a stressful situation "
    for(phoneNum in phoneNumArr) {
        console.log(phoneNum);
//         fetch("https://textbelt.com/text", {
    //     method: "post",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({
    //       phone: phoneNum,
    //       message: "Hello world",
    //       key: "4722fe44d79de99464d8437aea8875e7154670fboiE5L1hQg6rwtgWJLJrcWX3iz",
    //     }),
    //   })
    //     .then((response) => {
    //       return response.json();
    //     })
    //     .then((data) => {
    //       console.log(data);
    //     });
    }

}
