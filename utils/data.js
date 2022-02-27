const thoughtText = [
    'This is really my last year in my 20s (I turned 29 on the 20th)',
    'Im getting more and more comfortable with the current version of my body',
    'I deleted Facebook, Instagram and Twitter from my phone',
    'Have you ever seen or heard someone repeat one of your ideas like it was theirs?',
    'I plan to write and read wayyyy more this year',
    'Social Media is really making folks crazy…. Audacity is at an all time high',
    'The more I get into my music career, the more people fall out of my life',
    'I am feigning for community and I hope that pouring into my website and myself gets me that type of tribe Ive been craving forever',
    'I never feel like I lack anything until I log into social media (Its always in comparison to others when those weird thoughts and feelings arise)',
    'I havent had a stable income since 2019 lol',
    'I talk to God SO MUCH these days',
    'Reflection is necessary'
]

const friends = [
    // 'Gigastrength',
    // 'Deadlyinx',
    // 'Techpill',
    // 'Methnerd',
    // 'TreeEater',
    // 'PackManBrainlure',
    'Sharpcharm',
    'Snarelure',
    'Skullbone',
    'Burnblaze',
    'Emberburn',
    'Emberfire',
]

const usernames = [
    'Gigastrength',
    'Deadlyinx',
    'Techpill',
    'Methnerd',
    'TreeEater',
    'PackManBrainlure',
    // 'Sharpcharm',
    // 'Snarelure',
    // 'Skullbone',
    // 'Burnblaze',
    // 'Emberburn',
    // 'Emberfire',
]

const emails = [
    'webteam@comcast.net',
    'timlinux@optonline.net',
    'rfisher@mac.com',
    'mirod@sbcglobal.net',
    'danny@att.net',
    'sethbrown@live.com',
    'willg@yahoo.com',
    'gtewari@icloud.com',
    'johnh@icloud.com',
    'temmink@aol.com',
    'geoffr@live.com',
    'makarow@mac.com'
]

const reactionBodies = [
    'I think I may have a slight filter addiction sometimes (Another reason I took a social media break)',
    'Some stages of life are mad lonely ',
    'I made a mistake and cut a patch in my eyebrow while trying to cut the lace on my wig lol',
    'I been in Houston for a month but Im headed back to the west coast soooonnnnn',
    'People really get to acting weird when you do exactly what you said you were going to do',
    'If youve read this far, you a real one',
    'Dont let the actions of others and the world turn you cold because they will for sure try',
    'Im still getting birthday gifts from bae ',
    'I really was on IG talking to people and trying to build virtual connects and folks really were playing it crazyyyyyy',
    'I treat folks how I’d like to be treated. Forever giving off good energy because I know how beneficial itll be to my life in the long run'
]

const getRandomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomThoughtText = () => getRandomArrayItem(thoughtText);
const getRandomUsername = () => getRandomArrayItem(usernames);
const getRandomFriends = () => getRandomArrayItem(friends);
const getRandomEmails = () => getRandomArrayItem(emails);
const getRandomReactionBodies = () => getRandomArrayItem(reactionBodies);



module.exports = { getRandomThoughtText, getRandomUsername, getRandomFriends ,getRandomEmails, getRandomReactionBodies }