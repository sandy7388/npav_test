const fs = require('fs');
const _ = require('lodash')

fs.readFile('input.txt', 'utf8', (err, data) => {
    if (!err) {
        let array = data.split('\n');
        let json_array = []
        array.forEach(element => {
            let elem = element.split(",")
            let object = { employee_id: elem[0], name: elem[1], department: elem[2], salary: elem[3] }
            json_array.push(object)
        });
        // grouping array by department by using lodash
        employeeByDepartment = _.groupBy(json_array, 'department')
        // getting array for Engineering department
        let engineering_array = employeeByDepartment[' Engineering']
        let engineering_max_id;
        for (let i = 0; i < engineering_array.length; i++) {
            if (engineering_max_id == null || parseInt(engineering_array[i]['employee_id']) > parseInt(engineering_max_id['employee_id']))
                engineering_max_id = engineering_array[i];
        }

        // writing engineering department data into output.txt file
        fs.writeFile('output.txt', engineering_max_id.department + ' : ' + engineering_max_id.salary, (err, data) => {
        })

        // getting array for Testing department
        let testing_array = employeeByDepartment[' Testing']
        let testing_max_id;
        for (let i = 0; i < testing_array.length; i++) {
            if (testing_max_id == null || parseInt(testing_array[i]['employee_id']) > parseInt(testing_max_id['employee_id']))
                testing_max_id = testing_array[i];
        }

        // append the data to new line in output.txt file 
        fs.appendFile('output.txt', '\n' + testing_max_id.department + ' : ' + testing_max_id.salary, (err, data) => {
        })
    }
})