angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  var policy = [{
    PolicyNumber: 'BX08177629',
    PolicyType: '3',
    EmailAddress: 'auto@yahoo.com',
    RatingState: 'NC',
    Terms: [{
        BillPlanGroupCode: 3,
        BillPlanPaymentPlan: 'FULL',
        //EffectiveDate: '2016-05-18T00:00:00',
        EffectiveDate: '2016-05-18',
        //ExpirationDate: '2016-11-18T00:00:00',
        ExpirationDate: '2016-11-18',
        PolicyDateTime: '2016-05-18T09:56:11',
        Status: 'active policy',
        TermNumber: 1
      }]
  }];

  var VehicleforTerm = [{
    Make: "LEXUS",
    Model: "RX 350",
    Year: 2010,
    Vin: "2T2BK1BA6AC002904",
    VehicleTypeCode: "2",
    VehicleType: "Truck",
    VehicleNumber: 1,
    PriorBILimit: "006"
  }];

  var isPol;

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    },
    getPol: function() {
      return policy;
    },
    isPol : function() {
      if (policy != undefined) {
        isPol = true;
        return isPol;
      }
    },
    vehicalforterm: function() {
      return VehicleforTerm;
    }
  };
});

/*.factory('LoginService', function() {

        var poldata = false;
        var GetData = function(policy, zip) {

            if (policy == "A12345" & zip == "54115"  )
            {
                poldata = true;               
            }
            else {
                poldata =  false;                
            }
          }
    return {
        poldata : poldata;
        GetData : GetData;
        }
  });*/
