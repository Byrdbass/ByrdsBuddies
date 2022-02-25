//require schema and model from mongoose
//require User schema
//require Reaction schema

//_id
//thoughtText
//username
///email
//created at - NEEDS GETTER METHOD WITH CURRENT TIMESTAMP

//REACTIONS ARRAY
//reaction count - VIRTUAL AS LENGTH OF REACTIONS ARRAY

//need to use:
//reactionId 
//with mongoose objectId data type
//default value is set to a new objectID

//reactionBody
//string
//required
//280 char max

//username
//string
//required

//createdAt
//Date
//set default value to current timestamp
//use a getter method to format the timestamp on query