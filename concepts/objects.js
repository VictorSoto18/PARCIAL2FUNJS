const phone = {
    brand: 'Huawei',
    SO: 'Android 10',
    ram:'4GB',
    hdd: '260GB',
    screen: '5"',
    model: 'z',
    functional: true,
    damage: false
};

console.log(phone);
console.log(phone.brand);
phone.damage = true;

phone.color = 'black';
phone['case color'] = 'blue';
console.log(phone);
console.log(phone['color']);

phone.start = function(){
    console.log('Mi' + this.brand + '...');
    console.log('Encendiendo............');
    console.log('Listooo!!');
}

phone.call = function(name){
    console.log('Llamando a ' + name + '...');
    console.log('No contestó :(((');
}

phone.start();
phone.call('Juan');