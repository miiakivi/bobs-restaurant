function contactTabHtml() {
    let form = formHtml();
    let contactInfo = addressHtml();
    return '<input type="radio" name="css-tabs" id="tab-4" class="tab-switch"><label for="tab-4" class="tab-label">Contact us</label><div class="tab-content contact-tab">' +
    form + contactInfo + '<div id="map"><div id="map-container-google-2" class="z-depth-1-half map-container"><iframe src="https://maps.google.com/maps?q=utsjoki&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"' + 
    'style="border:0" allowfullscreen></iframe></div></div></div></div> '
}

function formHtml() {
    return '<div class="form-container"><form action="action_page.php"><label for="fname">First Name</label><input type="text" id="fname" name="firstname" placeholder="Your name..">' + 
    '<label for="lname">Last Name</label><input type="text" id="lname" name="lastname" placeholder="Your last name.."><label for="subject">Subject</label>' + 
    '<select id="subject" name="subject"><option value="reservation">Reservation</option><option value="happyThoughts">Happy thoughts</option><option value="somethingElse">Something else</option>' + 
    '</select><label for="message">Message</label><textarea id="message" name="message" placeholder="Write something.." style="height:100px"></textarea>' + 
    '<input type="submit" value="Submit"></form></div>';
}

function addressHtml() {
    return '<div class="address"><table class="tg"><thead><tr><th class="tg-c3ow" colspan="2">You find us in ...</th></tr></thead><tbody><tr>' + 
    '<td class="tg-dvpl">Address</td><td class="tg-dvpl">59  Jones Street, Utsjoki village, Finland</td></tr><tr><td class="tg-dvpl">Phone</td><td class="tg-c3ow">817-536-1953</td>' + 
    '</tr><tr><td class="tg-dvpl">Email</td><td class="tg-c3ow">bob@bobsbistro.fi</td></tr></tbody></table>';
}


export default contactTabHtml;