import { Meteor } from 'meteor/meteor';
import { CSV } from 'meteor/mhagmajer:csv';
import { Assets } from 'meteor/assets';
import swal from 'sweetalert';
import { Clubs } from '../../api/stuff/Club';

Meteor.methods({
  importCSVData: function () {
    const csvData = Assets.getText('/uploads/Manoa Club Connect\'s Club List.csv');

    CSV.parse(csvData, (error, result) => {
      if (error) {
        swal('Error', error.message, 'error');
      } else {
        const headers = result.shift();

        result.forEach(row => {
          const data = {};
          headers.forEach((header, index) => {
            switch (header.toLowerCase()) {
            case 'name of organization':
              data.organization = row[index];
              break;
            case 'date approved':
              data.dateApproved = row[index];
              break;
            case 'expiration':
              data.expiration = row[index];
              break;
            case 'type':
              data.type = row[index];
              break;
            case "contact person's email":
              data.email = row[index];
              break;
            case 'purpose':
              data.purpose = row[index];
              break;
            default:
              break;
            }
          });
          // Insert data into the ClubsCollection
          Clubs.collection.insert(data, (insertError) => {
            if (insertError) {
              swal('Error', error.message, 'error');
            } else {
              swal('Success', 'Item added successfully', 'success');
            }
          });
        });
      }
    });
  },
});
