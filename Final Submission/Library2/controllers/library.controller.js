const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Student = mongoose.model('Student');
bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


router.get('/', (req, res) => {
    res.render("student/addOrEdit", {
        viewTitle: "Create new account"
  });
});

router.get('/signinpage', (req, res) => {
    res.render("student/signinpage", {
        viewTitle: "Sign-in"
    });
});

router.post('/signinpage',(req,res)=>{
  console.log(req.body);
  res.redirect('/student/listb');
});

router.get('/lists', (req, res) => {
    Student.find((err, docs) => {
          console.log(docs);
        if (!err) {
            res.render("student/lists", {
                lists: docs
            });
        }
        else {
            console.log('Error in retrieving student list :' + err);
        }
    });
});



router.post('/', (req, res) => {
    if (req.body._id == '')
        insertRecord(req, res);
        else
        updateRecord(req, res);
});


function insertRecord(req, res) {
    var student = new Student();
    student.fullName = req.body.fullName;
    student.userId = req.body.userId;
    student.password = req.body.password;
    student.Year = req.body.Year;
    student.save((err, doc) => {
        if (!err)
            res.redirect('student/lists');
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("student/addOrEdit", {
                    viewTitle: "Create new account",
                    student: req.body
                });
            }
            else
                console.log('Error during record insertion : ' + err);
        }
    });
}

function updateRecord(req, res) {
    Student.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (!err) { res.redirect('student/lists'); }
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("student/addOrEdit", {
                    viewTitle: 'Update new account',
                    student: req.body
                });
            }
            else
                console.log('Error during record update : ' + err);
        }
    });
}




function handleValidationError(err, body) {
    for (field in err.errors) {
        switch (err.errors[field].path) {
            case 'fullName':
                body['fullNameError'] = err.errors[field].message;
                break;
            case 'userId':
                body['userIdError'] = err.errors[field].message;
                break;
            default:
                break;
        }
    }
}

router.get('/:id', (req, res) => {
    Student.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("student/addOrEdit", {
                viewTitle: "Update account",
                student: doc
            });
        }
    });
});

router.get('/delete/:id', (req, res) => {
    Student.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/student/lists');
        }
        else { console.log('Error in employee delete :' + err); }
    });
});

module.exports = router;
