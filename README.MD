
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
# ByrdsBuddies

## Description
This project is a back-end social network API that allows data to be written in NoSQL in regards to Users, Thoughts, and Reactions. Use this by installing all node packages with `npm i`, seed the data base with running `node seed.js` within the utils folder, and then `node index.js` in the root folder to run the server.  My motivation for this project was to find a way to use Mongoose to manipulate documents in a NoSQL database.
I wanted to help the functionality of a social media API on the back-end.  I learned many mongoose methods and realized that async and await methods are stronger for effecting multiple fields of data within one function. 

# Table of Contents
- [Installation](#Installation)
- [Description](#Description)
- [Usage](#Usage)
- [What-I-learned](#What-I-Learned)
- [Screenshot-of-Application](#Screenshot-of-Application)
- [Links](#Links)
- [Questions?](#Questions?)
- [License](#License)


## Installation
In order to install this project you will need to install all node packages with `npm i`, seed the data base with running `node seed.js` within the utils folder, and then `node index.js` in the root folder to run the server.  You could also seed the database by creating JSON files in a post method if you want all custom data.

## Usage
This is a back-end social network API that allows data to be written in NoSQL in regards to Users, Thoughts, and Reactions.  You can use this a template for running routes via express.js and implementing documents from a NOsql database.

## What-I-Learned
I learned many mongoose methods and realized that async and await methods are stronger for effecting multiple fields of data within one function.  Some of the arrays that were nested in the returned objects were populating in the database documents, but not in the returned JSON file through Insomnia.  I had to use some logic below to make sure both Models were awaiting the asynchronous call to the Mongoose database.

      const createThought = async (req, res) => {
        try {
            const thoughtData = await Thought.create(req.body)
            const userData = await User.findOneAndUpdate(
                { username: req.body.username },
                { $addToSet: { thoughts: thoughtData._id } },
                { new:true }
            )
            .populate('thoughts')
            res.status(200).json(thoughtData)
        } catch (err) {
            res.status(500).json(err)
        }
    }


## Screenshot of Application
![screenshot of insomnia application](byrdsbuddies-gif.gif)

## Links
[Walthrough Video part1](https://drive.google.com/file/d/104MQY9ZFHqcUrRtubWSHH5WWpuYDcITH/view?usp=sharing)

[Walthrough Video part2](https://drive.google.com/file/d/1K8hbCx1wXRlcB18GLMLqfLyiD8L_ELzV/view?usp=sharing)

## Questions?
My gitHub user name is byrdbass, and you may email me at byrdbass@gmail.com for Questions.

## License
MIT
