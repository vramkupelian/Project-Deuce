const express = require("express");
const app = express();
const router = express.Router();
const artistJS = require("../models/artist.js");
// const sgMail = require('@sendgrid/mail');


// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    artistJS.all(function(data) {
    var hbsObject = {
      dj_profile: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/DJs", function(req, res) {
    artistJS.createDJ([
      "dj_name", "dj_bio","dj_zip","dj_phone"
    ], [
      req.body.dj_name, req.body.dj_bio, req.body.dj_zip, req.body.dj_phone
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });

  
router.post("/api/vendors", function(req, res) {
    artistJS.createV([
      "vendor_name","vendor_zip","vendor_phone","event_location","event_time","cover_ticket_price"
    ], [
        req.body.vendor_name, req.body.vendor_zip, req.body.vendor_phone, req.body.event_location, req.body.event_time, req.body.cover_ticket_price,
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });

  router.delete("/api/DJs/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    artistJS.delete(condition, function(result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

module.exports = router;