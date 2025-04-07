const lion = {
    name :'사자'
};

const bravelion = {
    ...lion,
    attribute : 'brave'
};

const bravelikelion = {
    ...bravelion,
    color : 'yellow'
};

const {color, ...rest} = bravelikelion;
console.log(color);
console.log(rest);