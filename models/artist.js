var orm = require("../config/orm.js");

var artistBooker = {
    
    all: function(cb) {
        orm.all("dj_profile", function(res) {
          cb(res);
        });
      },
      // The variables cols and vals are arrays.
      createDJ: function(cols, vals, cb) {
        orm.create("dj_profile", cols, vals, function(res) {
          cb(res);
        });
      },

      createV: function(cols, vals, cb) {
        orm.create("vendor_profile", cols, vals, function(res) {
          cb(res);
        });
      },
      update: function(objColVals, condition, cb) {
        orm.update("dj_profile", objColVals, condition, function(res) {
          cb(res);
        });
      },
      delete: function(condition, cb) {
        orm.delete("dj_profile", condition, function(res) {
          cb(res);
        });
      }



    // selectAllArtists: function(cb){
    //     orm.selectAllArtists(function(res){
    //         cb(res);
    //     });
    // },

    // selectAllCond: function(table,column,condition,cb){
    //     orm.selectAllCond(table,column,condition, function(res){
    //         cb(res);
    //     });
    // },

    // insertOneArtist: function(artistName, artistBio,artistZip,artistPhone, cb){
    //     orm.insertOneArtist(artistName, artistBio,artistZip,artistPhone, function(res){
    //         cb(res);
    //     });  
    // },

    // insertOneVendor: function(vendorName, vendorZip, vendorPhone, eventLoc, eventTime, coverCharge, cd){
    //     orm.insertOneVendor(vendorName, vendorZip, vendorPhone, eventLoc, eventTime, coverCharge, function(res){
    //         cb(res);
    //     });
    // },

}

module.exports = artistBooker;