var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clientSchema = new Schema({
  STATUS = {
    type: String;
    enum: ['Single','Married']
  },
	SOURCE = {
    type: String;
    enum: ['Facebook','Web','Email']
  },
	# basic info
	first_name: String,
	last_name: String,
	coming_from: Status,
	date_of_birth = :Date
	civil_status = models.CharField(max_length=7, choices=STATUS, blank=True)
	amount_of_children = models.PositiveSmallIntegerField(null=True, blank=True)

	#addresses
	home_address = models.CharField(max_length=100, blank=True)
	foreign_address = models.CharField(max_length=100, blank=True)
	email = models.EmailField(blank=True)
	telephone = PhoneField(blank=True, help_text="Contact phone number")
  title:  String,
  author: String,
  body:   String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  }
});
