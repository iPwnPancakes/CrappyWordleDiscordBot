const { expect } = require('chai');
const { User } = require('../../../../../src/Modules/Discord/Models/User');

describe('User', () => {
    it('getID should return first parameter in constructor', () => {
        const user = new User('testeroni', 'username', 'disc');

        expect(user.getID()).to.equal('testeroni');
    });

    it('getUsername should return second parameter in constructor', () => {
        const user = new User('testeroni', 'username', 'disc');

        expect(user.getUsername()).to.equal('username');
    });

    it('getDiscriminator should return third parameter in constructor', () => {
        const user = new User('testeroni', 'username', 'disc');

        expect(user.getDiscriminator()).to.equal('disc');
    });
});
