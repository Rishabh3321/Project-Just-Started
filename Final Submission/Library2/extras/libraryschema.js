const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let StudentSchema = new Schema({
    username: {type: String, required: true, max: 100},
    userId: {type: String, required: true},
    password: {type: String, required: true, max: 100},
    category: {type: String, required: true, max: 100},
    Books:[{
            Book1:[{
                    BookId:{type: String, required: true, max: 100},
                    BookTitle:{type: String, required: true, max: 100},
                    Duedate:{type: String, required: true, max: 100},
                  }],
            Book2:[{
                          BookId:{type: String, required: true, max: 100},
                          BookTitle:{type: String, required: true, max: 100},
                          Duedate:{type: String, required: true, max: 100},
                  }],
            Book3:[{
                          BookId:{type: String, required: true, max: 100},
                          BookTitle:{type: String, required: true, max: 100},
                          Duedate:{type: String, required: true, max: 100},
                  }],
            Book4:[{
                          BookId:{type: String, required: true, max: 100},
                          BookTitle:{type: String, required: true, max: 100},
                          Duedate:{type: String, required: true, max: 100},
                  }],
                  }],
      Number:{type: Number, required: true, max: 100}},

    { collection : 'Student'
});


// Export the model
module.exports = mongoose.model('Student', StudentSchema);
