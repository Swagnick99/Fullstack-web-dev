var employee = {
    name: "John Smith",
    job: "Programmer",
    age: 31,
    nameLength: function() {
        console.log(this.name.length);
    },
    alertObj: function() {
        alert("Name is "+ this.name +", Job is "+ this.job +", Age is "+ this.age);
    },
    lastName: function() {
        var nms = this.name.split(' ');
        console.log(nms[1]);
    }
}