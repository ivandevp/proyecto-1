const deadline = {
    init() {
        $('input[type="date"]').change(app.addDeadline);
    },
    addDeadline() {
        console.log('deadline module');
    }
};

module.exports = deadline;