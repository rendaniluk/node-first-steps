var figlet = require('figlet');

figlet.text('Lukhwa', {
    font: 'Ghost',
    horizontalLayout: 'fitted',
    verticalLayout: 'default'
}, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
});
