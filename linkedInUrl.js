const LinkedInUrl = `https://www.linkedin.com/in/nikhil-gahlaut-61b1571aa`;
const regex = /^https:\/\/www\.linkedin\.com\/in\/[a-z0-9_-]{5,30}[a-z0-9]$/i.test(LinkedInUrl);
if (regex == 1) {
    console.log(`${LinkedInUrl} : Validation succesfull!!`)  
}
else{
    console.log(`${LinkedInUrl} : Validation failed!!`)
}