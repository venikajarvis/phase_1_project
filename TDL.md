As a user, I want to have Toni Morrison's books list load asynchrously with the DOM

As a user, I want to have a submit button for user notes

As a user, I want to have a submit button for user notes

MVP Event Listeners:
- DOM content loaded w/ fetch request to NYT API
- Submit button for comments
- Click allowing comments to be deleted

Paradise: https://www.amazon.com/s?k=paradise+toni+morrison&crid=2M9E1VUIQQ78U&sprefix=paradise+toni%2Caps%2C156&ref=nb_sb_ss_ts-doa-p_1_13
Playing in the Dark: https://www.amazon.com/s?k=playing+in+the+dark+toni+morrison&crid=1QJJT7IKKO85X&sprefix=Playing+in+the+Dark+%2Caps%2C161&ref=nb_sb_ss_ts-doa-p_1_20
A Mercy: https://www.amazon.com/s?k=a+mercy+toni+morrison&ref=nb_sb_noss_1
Home: https://www.amazon.com/s?k=Home+toni+morrison&ref=nb_sb_noss
Tar Baby: https://www.amazon.com/s?k=tar+baby+toni+morrison&crid=3E057IZV8M8Y1&sprefix=Tar+ababa+toni+morrison%2Caps%2C162&ref=nb_sb_ss_sc_1_23
Beloved: https://www.amazon.com/s?k=beloved+toni+morrison&ref=nb_sb_noss_2
God Help the Child: https://www.amazon.com/s?k=God+Help+the+Child+toni+morrison&ref=nb_sb_noss_1
The Source of Self-Regard: https://www.amazon.com/s?k=The+Source+of+Self-Regard+toni+morrison&ref=nb_sb_noss_2


function amazonBooks () {
    const bookLinks = document.querySelector(".reviewArrayItems").getElementsByTagName("h2").innerHTML;
    switch (bookLinks) {
        case "Paradise":
            
            // DOES NOT WORK2: // <h2><a href="https://www.amazon.com/s?k=paradise+toni+morrison&crid=2M9E1VUIQQ78U&sprefix=paradise+toni%2Caps%2C156&ref=nb_sb_ss_ts-doa-p_1_13">Paradise</a></h2>
            // DOES NOT WORK1: // <a href="https://www.amazon.com/s?k=paradise+toni+morrison&crid=2M9E1VUIQQ78U&sprefix=paradise+toni%2Caps%2C156&ref=nb_sb_ss_ts-doa-p_1_13">Paradise</a>
            break;
        default:
            // bookLinks;
}
};